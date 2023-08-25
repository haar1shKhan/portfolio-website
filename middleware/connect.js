
import mongoose from "mongoose";

const connectDb= (handler)=>async(req,res)=>{

    if(mongoose.connections[0].readyState){
        console.log('already conneted');
        return handler(req,res)
 
    }
        await mongoose.connect("mongodb://127.0.0.1:27017/codeverse")
        console.log('conneted');
        return handler(req,res)
}



export default connectDb 