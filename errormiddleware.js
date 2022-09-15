const errormiddle=(err,req,res,next)=>
{
    return res.status(500).send('some error occured')
}

module.exports=errormiddle