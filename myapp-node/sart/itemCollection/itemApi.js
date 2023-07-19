const userModel = require('../userCollection/user_model')

function itemGet()
{const itemModel = require('./itemModel')
const cors= require('cors')
const express=require('express')
app=express()
app.use(express.json())
app.use(cors())


app.get('/',async(req,resp)=>{
    const data=await itemModel.find({})
    resp.send(data)
})

app.post('/',async(req,resp)=>{
    let data=new itemModel(req.body)
    let result=await data.save()
    resp.send(result)
})

app.delete('/',async(req,resp)=>{
    let data=await itemModel.deleteOne(req.body)
    resp.send(data)
})

app.put('/',async(req,resp)=>{
    let data=await itemModel.updateOne({_id:req.body._id},{$set:req.body.update})
    resp.send(data)
})

app.post('/search',async(req,resp)=>{
    let result=await itemModel.find({$or:[{name:{$regex:req.body.key,$options:"i"}},{itemId:{$regex:req.body.key}},{description:{$regex:req.body.key,$options:"i"}}]})
    
    resp.send(result)
})


app.listen(8001)}
module.exports=itemGet