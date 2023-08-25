// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import connectDb from '../../middleware/connect'
import Testomonial from '../../models/testomonial'

const handler = async (req, res) => {

 try{
    
    if(req.method=='POST'){

    console.log(req.body)
    let testomonial = new Testomonial({

        client: req.body.client,
        reviews: req.body.reviews,
        showInweb:req.body.showInweb,

    })
    await testomonial.save()

    
  }
         res.status(200).json({  isSuccess:true,msg:"The query has been added" })

    } catch(e) {

        console.log(e);
        res.status(500).json({  isSuccess:false,msg:"some error occured"+e.messsage })
    }

}

export default connectDb(handler)
