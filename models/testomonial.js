
const mongoose = require('mongoose')


const testomonialSchema = mongoose.Schema({
    client :
    {
        type:String,
        required:true
    },
    reviews :
    {
        type:String,
        required:true
    },
    showInweb :
    {
        default:false,
        type:Boolean,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

mongoose.models={} 
export default mongoose.model('testomonial',testomonialSchema) 