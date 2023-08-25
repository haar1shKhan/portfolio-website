// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import  AddUser from '../../models/user'


export const config = {
    api: {
      bodyParser: {
        sizeLimit: '20mb',
      },
    },
  };

const handler = async (req, res) => {

 try{
    
    if(req.method=='POST'){

      const {email,password} = await req.body;

      const confirmEmail = await AddUser.findOne({email})
      
      if(email==null || email =="" || password==null || password==""){
          
          return res.status(500).json({  isSuccess:false ,msg:"Complete the form"})
          
        }
        
        if(!confirmEmail  || confirmEmail.email !== email || confirmEmail.password !== password){
            console.log("in")
            return res.status(200).json({ isSuccess: false , msg:"Incorrect Input" })

        }

          return res.status(200).json({ isSuccess: true,admin: confirmEmail  })
    }; 


    } catch(e) {
        console.log(e);
       return res.status(500).json({ isSuccess: false ,msg:"some error occured"+e.message })
    }

}

export default connectDb(handler)
