
const mongoose = require('mongoose')


const aboutSchema = mongoose.Schema({

    name:
    {
        type:String,
        required:true
    },
    age:
    {
        type:Number,
        require:true
    },
    nationality:{
        type:String,
        required:true
    },
    livesIn:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    whatsApp:{
        type:String,
        required:true
    },
    addSkills:
    [{
        type:String,
    }],
    description:
    {
        type:String,
        required:true
    },
    bulletptn:[{
        type:String,
        required:true
    }],
    // languages:
    // [{
    //     name:{
    //         type:String,
    //         default:null,
    //         required:true
    //     },
    //     percentage:{
    //         type:Number,
    //         default:null,
    //         required:true
    //     }
    // }],
    socialMedia:{type:Object}
})

mongoose.models={} 
export default mongoose.model('about',aboutSchema) 