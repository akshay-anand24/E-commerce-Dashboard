import { useEffect, useState } from 'react'
import './style.css'
import {useNavigate, Link} from 'react-router-dom'
function Signup(){
let p=0,n=0,u=0,e=0;
const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [uname,setUname]=useState("")
const [pass,setPass]=useState("")
const navigate=useNavigate()


useEffect(()=>{

    Email()
    password()
    username()
    Name()

},[uname,name,pass,email])



let Name=()=>{
    let nameExp= new RegExp("(?=.*?[#?-_)(!@$%^&*-])")
    if((name[0]===' '||nameExp.test(name))&&name.length!=0){
    document.getElementsByClassName('taken')[2].style.display='block'
    n=0
    }
    else{
    document.getElementsByClassName('taken')[2].style.display='none'
    n=1
    }

}

let Email=()=>{
        setEmail(email.trim(""))
}


let username=async()=>{
   
    setUname(uname.trim())

    let result= await fetch("http://localhost:8000/username",{
        method:'POST',mode:'cors',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({"username":uname})
    })


    result=await result.json()
    if(result.length && uname!=""){
    document.getElementsByClassName('taken')[0].style.display='block'
    u=0;
    }
    else{
    document.getElementsByClassName('taken')[0].style.display='none'
    u=1;
    }

}


let password=()=>{
    setPass(pass.trim())
let passw=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")

    if(passw.test(pass)||pass.length==0){
    document.getElementsByClassName('taken')[1].style.display='none'
    p=1;
    }    else{
    document.getElementsByClassName('taken')[1].style.display='block'
    p=0
    }
    if(pass.length==0)
    p=0

}


let submit=async()=>{
     
      if(p&&u&&n){
    console.log(name,email,uname,pass)
    let data={"name":name,"username":uname,"email":email,"password":pass,"login":1}
 
    let result=await fetch("http://localhost:8000",{
        method:'POST',mode:'cors',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    console.warn( await result.json())
    navigate('/login')
}
    else
    alert("Error in Form Filling")
}









function reset(){
    setEmail("") 
    setName("")
    setPass("")
    setUname("")
}




    return(<div>
        <div className="signup">
            <h1>Sign Up</h1><br/> <br/>
            <form>

        <div><label htmlFor="name">Name:</label></div>
        <div><input type="text" name="name" id="name" placeholder="Rajesh Kumar"required value={name}
        onChange={(e)=>{
            setName(e.target.value)
            }}/></div><br/>
        
        <div><label htmlFor="uname">UserName:</label></div>
        <div><input type="text" name="uname" id="uname" placeholder="Rajeshk_10" value={uname} required onChange={(e)=>{setUname(e.target.value)}}/></div><br/>
        
        <div><label htmlFor="email">E-mail:</label></div>
        <div><input type="email" name="email" id="email" placeholder="rajesh10@gmail.com" value={email} onChange={(e)=>{
            setEmail(e.target.value)}}/></div><br/>
        
        <div><label htmlFor="pass">Password:</label></div>
        <div><input type="password" name="pass" id="pass" placeholder="********" required value={pass} onChange={(e)=>{setPass(e.target.value)}}/></div><br/>

        <button type="reset" className="signbtn" onClick={submit} >Submit</button>
        <button type="reset"className="signbtn" onClick={reset} >Reset</button>
        <div className='taken' hidden>username already taken</div>
        <div className='taken' hidden> password length:8,A-z,a-z,1-9,special characters</div>
        <div className='taken' hidden>Invalid</div>

            </form>

        </div>
   <div id="euser"><Link  to='/login'>Existing User!! Click Here</Link></div>
        </div>)
}

export default Signup