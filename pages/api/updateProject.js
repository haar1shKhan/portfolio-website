// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import Project from '../../models/project'

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '20mb',
      },
    },
  };

const handler = async (req, res) => {

 try{
    
    if(req.method=='PUT'){

        // const {type} = req.query

        // if(type!=="null" && type!=="" && type!==null ){
        //     const skills = await Skills.find({type})    
        //     return  res.status(200).json({ isSuccess:true,skills})
        // }
        const {Projectname,gitHubLink,Colaborator,images, description,id } = await req.body;
        // console.log('sever',req.body);
        if(Projectname==null || Projectname =="" || gitHubLink==null || gitHubLink=="" || Colaborator==null 
      || images==null || images =="" || description==null || description==""){

       return res.status(500).json({  isSuccess:false ,msg:"Complete the form"})

      }

        const projects = await Project.findOneAndUpdate({_id:id},{
            Projectname:Projectname,
          gitHubLink: gitHubLink,
          description:description,
          Colaborator:Colaborator,
          images:images,
        })    
        return  res.status(200).json({ isSuccess:true,projects})
    }

    } catch(e) {
        return  res.status(500).json({  isSuccess:false ,msg:"some error occured "+e.message})
    }

}

export default connectDb(handler)
