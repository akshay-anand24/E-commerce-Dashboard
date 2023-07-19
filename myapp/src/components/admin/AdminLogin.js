import { useEffect, useState } from 'react'
import './style.css'
import { useNavigate,Outlet } from 'react-router-dom'

function AdminLogin(){
let u,p;
const [uname,setUname]=useState("")
const [pass,setPass]=useState("")
let navigate=useNavigate()

useEffect(()=>{
    uptodate()
},[uname,pass])


function uptodate(){
    u=uname
    p=pass
}
function adminlogin(){
    if(u==111&&p==111)
    {navigate('/admin');
    localStorage.setItem("admin","Hello")
}

    else
    document.getElementById('IUP').style.display='block'} 

    return(
        
<div>
<div className="adminlogin login">
    <h1> ADMIN Login</h1>
   <form >
    <label htmlFor="uname" className="col25">Username:</label>
    <input type="text" name="uname" id="uname" onChange={(e)=>{setUname(e.target.value)}}/>

    <label htmlFor="pass" className="col25">Password:</label>
    <input type="password" name="pass" id="pass" onChange={(e)=>{setPass(e.target.value)}}/>

    <div id="IUP" hidden>Invalid Username or Password</div>
    <button type="button" onClick={adminlogin}>Login</button>
   </form>
</div>
</div>
    )
}
export default AdminLogin