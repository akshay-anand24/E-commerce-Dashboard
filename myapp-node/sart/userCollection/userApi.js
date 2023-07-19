function userGet()
{const userModel = require('./user_model')
const cors= require('cors')
const express=require('express')
app=express()
app.use(express.json())
app.use(cors())


app.get('/',async(req,resp)=>{
    const data=await userModel.find({})
    resp.send(data)
})

app.post('/',async(req,resp)=>{
    let data=new userModel(req.body)
    let result=await data.save()
    result=result.toObject()
    delete  result.password
    delete result.email
    resp.send(result)
})

app.delete('/',async(req,resp)=>{
    let data= await userModel.deleteOne(req.body)
    resp.send(data)
})

app.put('/',async(req,resp)=>{
    let data= await userModel.updateOne({name:req.body.name},{$set:req.body.update})
    resp.send(data)
})

app.post('/login',async(req,resp)=>{
    const result= await userModel.findOne(req.body).select("-password -email") //("-username -email -name")aise bhi de skte hai
    if(result)
    resp.send(result)
    else
    resp.send({"login":0})
})

app.post('/username',async(req,resp)=>{
    let result=await userModel.find({username:{$regex:"^"+req.body.username}})
    resp.send(result)
})

app.listen(8000)}
module.exports=userGet