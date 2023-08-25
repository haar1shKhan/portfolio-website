// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import Skills from '../../models/skills'

const handler = async (req, res) => {

 try{
    
    if(req.method=='GET'){
        // const {type} = req.query

        // if(type!=="null" && type!=="" && type!==null ){
        //     const skills = await Skills.find({type})    
        //     return  res.status(200).json({ isSuccess:true,skills})
        // }

        const skills = await Skills.find({})    
        return  res.status(200).json({ isSuccess:true,skills})
    }

    } catch(e) {
        return  res.status(500).json({  isSuccess:false ,msg:"some error occured"+e.message})
    }

}

export default connectDb(handler)
