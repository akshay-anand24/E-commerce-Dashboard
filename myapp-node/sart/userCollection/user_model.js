const mongoose =require('mongoose')
const connection = require('../connection')

    const userSchema=new mongoose.Schema({
        name:String,
        username:String,
        email:String,
        password:String,
        login:Number

    })
const userModel=mongoose.model('users',userSchema)

module.exports=userModel
