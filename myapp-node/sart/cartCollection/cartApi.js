
function cartApi(){
let express=require('express')
const cartModel = require('./cartModel')
const cors= require('cors')

let app=express()
app.use(express.json())
app.use(cors())


app.post('/cart',async(req,resp)=>{
    let result= await cartModel.find(req.body)
    resp.send(result)
})

app.post('/',async(req,resp)=>{
let result=new cartModel(req.body)
result=await result.save()
resp.send(result)
})

app.put('/',async(req,resp)=>{
    let result=await cartModel.updateOne({username:req.body.username,itemObject:req.body.itemObject},{$set:req.body},{upsert:true})
    resp.send(result)
})
app.put('/plus',async(req,resp)=>{
    let result=await cartModel.updateOne({username:req.body.username,itemObject:req.body.itemObject},{$inc:{count:1}})
    resp.send(result)
})
app.put('/minus',async(req,resp)=>{
    let result=await cartModel.updateOne({username:req.body.username,itemObject:req.body.itemObject},{$inc:{count:-1}})
    resp.send(result)
})

app.delete('/',async(req,resp)=>{
    let result=await cartModel.deleteOne(req.body)
    resp.send(result)
})


app.listen(8002)
}
module.exports=cartApi