// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import Skills from '../../models/skills'

const handler = async (req, res) => {

 try{
    
    if(req.method=='POST'){
        
      const {skills,percentage,type } = req.body 
      console.log(req.body)

      if(await skills==null||skills=="" || percentage==null || percentage=="" || type==null || type=="")  {
       return res.status(500).json({  isSuccess:false ,msg:"Complete the form"})
      }

      if(await Skills.exists({skills:skills.toLowerCase()})){
       return res.status(500).json({  isSuccess:false ,msg:"This Skill already exist in your arsenal"})
      }
      
        
        let skill = await new Skills({
            skills:skills.toLowerCase(),
            percentage: percentage,
            type:type        
        })
        await skill.save()
    
        return  res.status(200).json({ isSuccess:true,msg:"The query has been added" })
    }

    } catch(e) {
        return  res.status(500).json({  isSuccess:false ,msg:"some error occured"+e.message})
    }

}

export default connectDb(handler)
