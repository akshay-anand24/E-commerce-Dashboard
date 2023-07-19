import './style.css'
import  loadCall from './javas.js'
import { useEffect } from 'react'
import { Link,useNavigate } from 'react-router-dom'

function Navbar(){
   let navigate=useNavigate()
   let auth=localStorage.getItem("user")
   let auths=JSON.parse(auth)
   let Menu="Menu"

   useEffect(loadCall)
    
    return(
     
            <div className="navbar">
    <button className="btn" hidden>&#8801;</button>
    <ul className="liststyle">
    <li> <Link to="/" className="astyle">Home</Link> </li>
    <li><Link to="/about" className="astyle">AboutUs</Link></li>
    <li className="dropbox">{auth?auths.name:Menu}
        <div  className="contentbox">
          { auth?<div className='pd6'><Link to="/" onClick={()=>{localStorage.removeItem("user");navigate('/');window.location.reload()}}>Logout</Link></div> :<div className="pd6"><Link to="/signup">Signup</Link></div>}<hr/>
          { auth?<div className='pd6'><Link to="/cart">Cart</Link></div> :<div className="pd6"><Link to="/login">Login</Link></div>}
            
        </div>
    </li>
   <div className="sch"><input type="text" className="search" placeholder="Search..."/><button className="btn" type="submit">Search</button></div>
</ul></div>
      
    
            ) 
} 

export default Navbar