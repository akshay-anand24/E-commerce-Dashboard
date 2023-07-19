const mongoose =require('mongoose')
const connection=require('../connection')


const itemSchema=new mongoose.Schema({
    name:String,
    url:String,
    cost:{
        type:mongoose.Types.Decimal128
        },
    description:String,
    itemId:String
})
const itemModel=mongoose.model('items',itemSchema)

module.exports=itemModel