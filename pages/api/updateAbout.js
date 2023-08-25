// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import About from '../../models/about'

const handler = async (req, res) => {

 try { if(req.method=='PUT'){
    // console.log(req.body);
    const {name,age,nationality,livesIn,email,whatsApp,addSkills,description,bulletptn,languages,socialMedia,id}=await req.body
    
    if(name==''||name==null || age ==''|| age ==null ||livesIn ==''|| livesIn==null|| email==''|| email==null|| whatsApp==''|| 
        whatsApp==null||addSkills.length==0 || description==''||description==null,bulletptn.length==0){
            return res.status(500).json({  isSuccess:false ,msg:"Complete the form"})
    }

    let about = await About.findByIdAndUpdate({_id:id},{
      name:name,
      age:age,
      nationality:nationality,
      livesIn:livesIn,
      email:email,
      whatsApp:whatsApp,
      addSkills:addSkills?.split(","),
      description:description,
      bulletptn:bulletptn?.split(","),
      languages:languages,
      socialMedia:socialMedia,
    })
    
    return res.status(200).json({ isSuccess: true,msg:"The query has been Updated" })}
  }

  catch(e){

    return res.status(500).json({ isSuccess: false,msg:"Complete the form" + e.message})

  }
}

export default connectDb(handler)
