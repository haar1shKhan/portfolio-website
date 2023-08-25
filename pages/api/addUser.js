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

      const {name,email,password} = await req.body;

      if(email==null || email =="" || password==null || password=="" || name ==""||name==null){

       return res.status(500).json({  isSuccess:false ,msg:"Complete the form"})

      }

      console.log('pro',email);

      let addUser = await new AddUser({
          name:name,
          email:email,
          password:password,
      })


      console.log(addUser);
      await addUser.save()
     
     return res.status(200).json({ isSuccess: true,msg:"The query has been added" })
    }; 


    } catch(e) {
        console.log(e);
       return res.status(500).json({ isSuccess: false ,msg:"some error occured"+e.message })
    }

}

export default connectDb(handler)
