// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import About from '../../models/about'

const handler = async (req, res) => {

 try { if(req.method=='POST'){
    const {name,age,nationality,livesIn,email,whatsApp,addSkills,description,bulletptn,languages,socialMedia}=req.body

    if(await About.exists({email:email})){
      return res.status(500).json({ isSuccess: false,msg:"About setup already exists by this email"})
    }

    let about = new About({
      name:name,
      age:age,
      nationality:nationality,
      livesIn:livesIn,
      email:email,
      whatsApp:whatsApp,
      addSkills:addSkills.split(","),
      description:description,
      bulletptn:bulletptn.split(","),
      languages:languages,
      socialMedia:socialMedia,
    })
    await about.save()
    
    return res.status(200).json({ isSuccess: true,msg:"The query has been added" })}
  }

  catch(e){

    return res.status(500).json({ isSuccess: false,msg:"Complete the form"})

  }
}

export default connectDb(handler)
