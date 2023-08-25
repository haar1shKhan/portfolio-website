// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import User from '../../models/user'

const handler = async (req, res) => {

 try{
    
    if(req.method=='GET'){
    

        const user = await User.find({})    
        return  res.status(200).json({ isSuccess:true,user})
    }

    } catch(e) {
        return  res.status(500).json({  isSuccess:false ,msg:"some error occured"+e.message})
    }

}

export default connectDb(handler)
