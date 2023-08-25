// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import About from '../../models/about'


const handler = async (req, res) => {

 try{
    
    if(req.method=='GET'){


        const about = await About.findOne({})    
        return  res.status(200).json({ isSuccess:true,about})
    }

    } catch(e) {
        return  res.status(500).json({  isSuccess:false ,msg:"some error occured"+e.message})
    }

}

export default connectDb(handler)
