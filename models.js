const mongoose=require('mongoose')


const schema=mongoose.Schema({
    name:{
      type: String,
      required:true,
      trim:true,
      minLength:[6,'name cannot be less than six characters']  
    },
    completed:{
        type:Boolean,
        default:false
    }
    
})
module.exports=mongoose.model('taskname',schema)