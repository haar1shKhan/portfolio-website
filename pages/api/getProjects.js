// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import Project from '../../models/project'

const handler = async (req, res) => {

 try{
    
    if(req.method=='GET'){
        // const {id} = req.query
        // console.log('id',id);
        // if(id!=="null" && id!=="" && id!==null ){
        //     const projects = await Project.find({id})    
        //     return  res.status(200).json({ isSuccess:true,projects})
        // }

        const projects = await Project.find({})    
        return  res.status(200).json({ isSuccess:true,projects})
    }

    } catch(e) {
        return  res.status(500).json({  isSuccess:false ,msg:"some error occured"+e.message})
    }

}

export default connectDb(handler)
