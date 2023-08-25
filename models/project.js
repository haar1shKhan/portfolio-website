
const mongoose = require('mongoose')


const projecSchema = mongoose.Schema({
    Projectname:
    {
        type:String,
        required:true
    },
    Slug:
    {
        type:String,
        required:true
    },
    gitHubLink:
    {
        type:String,
        require:true
    },
    Colaborator :
    [{
        type:String,
        required:true
    }],
    images :
    [{
        type:String,
        required:true
    }],
    description :
    {
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})

mongoose.models={} 
export default mongoose.model('projects',projecSchema) 