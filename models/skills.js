
const mongoose = require('mongoose')


const skillsSchema = mongoose.Schema({
    skills:
    {
        type:String,
        required:true,
        unique:true
    },
    percentage:
    {
        type:Number,
        require:true
    },
    type:
    {
        type:String,
        required:true
    },
})

mongoose.models={} 
export default mongoose.model('skills',skillsSchema) 