const fetch=require('fetch')
let submit=async()=>{

    let result=await fetch("http://localhost:5000",{
        method:'post',
        Headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:`{name:"name",username:"uname","email":"email","password":"pass"}`
    })
    console.warn( await result.json())
}

submit()