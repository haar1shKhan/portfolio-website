// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import Skills from '../../models/skills'

const handler = async (req, res) => {

 try{
    
    if(req.method=='PUT'){

        // const {type} = req.query

        // if(type!=="null" && type!=="" && type!==null ){
        //     const skills = await Skills.find({type})    
        //     return  res.status(200).json({ isSuccess:true,skills})
        // }
        const {skills,percentage,type,id } = await req.body;
        // console.log('server',req.body);
        
        if(await skills==null||skills=="" || percentage==null || percentage=="" || type==null || type=="")  {
            return res.status(500).json({  isSuccess:false ,msg:"Complete the form"})
           }

        if(await Skills.exists({skills:skills.toLowerCase()})){
         return res.status(500).json({  isSuccess:false ,msg:"This Skill already exist in your arsenal"})
        }

        const skill = await Skills.findOneAndUpdate({_id:id},{
          skills:skills,
          percentage:percentage,
          type:type
        })    
        return  res.status(200).json({ isSuccess:true,msg:'Skill have been update'})
    }

    } catch(e) {
        return  res.status(500).json({  isSuccess:false ,msg:"some error occured "+e.message})
    }

}

export default connectDb(handler)
