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
    
    if(req.method=='POST'){

      const {Projectname,gitHubLink,Colaborator,images, description } = await req.body;

      if(Projectname==null || Projectname =="" || gitHubLink==null || gitHubLink=="" || Colaborator==null 
      || images==null || images =="" || description==null || description==""){

       return res.status(500).json({  isSuccess:false ,msg:"Complete the form"})

      }

      console.log('pro',Projectname);

      let project = await new Project({
          Projectname:Projectname,
          Slug:Projectname.replace(/\s+/g, '-').toLowerCase(),
          gitHubLink: gitHubLink,
          description:description,
          Colaborator:Colaborator.split(","),
          images:images,
  
      })
      console.log(project);
      await project.save()
     
     return res.status(200).json({ isSuccess: true,msg:"The query has been added" })
    }; 


    } catch(e) {
        console.log(e);
       return res.status(500).json({ isSuccess: false ,msg:"some error occured"+e.message })
    }

}

export default connectDb(handler)
