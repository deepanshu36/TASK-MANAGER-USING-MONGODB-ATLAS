const express=require('express')
const router=require('./router')
const app=express()
require('dotenv').config()

const errormiddle=require('./errormiddleware')

const notfound=require('./middleware')

const connection=require("./conn")

// const model=require('./model')

const port=process.env.port || 8000

// app.use(errormiddle)
app.use(express.json())
app.use(router)

// app.use((err,req,res,next)=>{
//     console.log("this is working")
//     return res.status(500).send('something wrong with you')
// })

app.use(notfound)

app.use(errormiddle)


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})

const fun=async()=>
{
    try
    {
       await connection(process.env.MONGO_URL)
         console.log('connected to database')
    }
    catch(e){
     console.log(e)
    }

}
fun()