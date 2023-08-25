// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import Project from '../../models/project'

const handler = async (req, res) => {

 try{
    
    if(req.method=='DELETE'){

        // const {type} = req.query

        // if(type!=="null" && type!=="" && type!==null ){
        //     const skills = await Skills.find({type})    
        //     return  res.status(200).json({ isSuccess:true,skills})
        // }
        const {id} = await req.query;
        console.log(id);

        const projects = await Project.findOneAndDelete({_id:id})    
        return  res.status(200).json({ isSuccess:true,mgs:"The project has been deleted",projects})
    }

    } catch(e) {
        return  res.status(500).json({  isSuccess:false ,msg:"some error occured "+e.message})
    }

}

export default connectDb(handler)
