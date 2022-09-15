const express=require('express')
const { nextTick } = require('process')
const router=new express.Router()
// const Student=require('./model')
// const bcrypt=require('bcrypt')
const Tasks=require('./models')
const wrapper=require('./wrappermiddleware')

router.post('/api/v1/tasks',async(req,res)=>
{  


const result= await Tasks.create(req.body)
res.status(201).send(result)


})

router.get('/api/v1/tasks',wrapper(async(req,res)=>
{


    const result=await Tasks.find()
    res.json({result})
    
        res.send('error')
  
}))

router.get('/api/v1/tasks/:id',wrapper(async(req,res)=>
{
       const result=await Tasks.findOne({_id:req.params.id})

        if(!result)
       {
        const error=new Error('not found')
        error.status(404)
        return next(error)

        return res.send('no record available')

       }
        res.json({result}) 

    } 
  
))


router.patch('/api/v1/tasks/:id',wrapper(async(req,res)=>
{
//    res.send('hello from patch')

    const result=await Tasks.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidator:true})
    if(!result)
    return res.send('no record available')

    res.send(result);

}))



router.put('/api/v1/tasks/:id',wrapper(async(req,res)=>
{
//    res.send('hello from patch')

    const result=await Tasks.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidator:true})
    if(!result)
    return res.send('no record available')
    res.send(result);


}))


router.delete('/api/v1/tasks/:id',wrapper(async(req,res)=>
{
  
    const result=await Tasks.findByIdAndDelete({_id:req.params.id})
       if(!result)
       return res.send('no record available')

       res.json({result})


}))


module.exports=router;
