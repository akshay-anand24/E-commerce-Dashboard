import { useState } from 'react'
import './style.css'
import { useNavigate,Link } from 'react-router-dom'

function Login(){
const [uname,setUname]=useState("")
const [pass,setPass]=useState("")
const navigate=useNavigate()

async function login(){
    let data={username:uname,password:pass}
    let result=await fetch("http://localhost:8000/login",{
        method:'POST',mode:'cors',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
 let r=await result.json()
console.warn(r)
if(r.login){
    localStorage.setItem("user",JSON.stringify(r))
    navigate('/')
    window.location.reload()

}
else{
document.getElementById('IUP').style.display='block'
setTimeout(()=>{
    document.getElementById('IUP').style.display='none'
},2000)}

}



    return(
        
<div>
<div className="login">
    <h1>Login</h1>
   <form >
    <label htmlFor="uname" className="col25">Username:</label>
    <input type="text" name="uname" id="uname" onChange={(e)=>{setUname(e.target.value)}}/>

    <label htmlFor="pass" className="col25">Password:</label>
    <input type="text" name="pass" id="pass" onChange={(e)=>{setPass(e.target.value)}}/>

    <div id="IUP" hidden>Invalid Username or Password</div>
    <button type="button" onClick={login}>Login</button>
   </form>
   <div id="nuser"><Link  to='/signup'>New User!! Click Here</Link></div>
</div>
</div>
    )
}
export default Login