let mongoose=require('mongoose')
let connection=require('../connection')

let cartSchema=new mongoose.Schema({
    username:String,
    count:Number,
    itemObject:Object
})
let cartModel=mongoose.model('cart',cartSchema)
module.exports=cartModel