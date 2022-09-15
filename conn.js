const mongoose=require('mongoose')

const connectionstring="mongodb+srv://deepanshu:1234@cluster0.j4saqg0.mongodb.net/taskmanager?retryWrites=true&w=majority"

const connection=(url)=>
{
    return mongoose.connect(url,{useNewUrlParser:true})
}

module.exports=connection
