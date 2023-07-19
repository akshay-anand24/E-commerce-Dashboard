import { useEffect } from 'react'
import './style.css'
import {Link,Outlet, useNavigate} from 'react-router-dom'
function Admin(){
   let navigate=useNavigate()

    let  scroll=()=>{
        let uu=document.getElementById("1")
        // if(uu)
         uu.scrollIntoView({behavior:'smooth'})
         navigate('/admin/add')
        
        
    }
    // useEffect(scroll)
   
    

    return(
        <div>
         
         {/* <Link to='/admin/add' style={{textDecoration:"none"}} ></Link> */}
            <div className="admin">
 <div  onClick={scroll}><button type="button"  >Add</button></div>
                <Link to='/admin/update' style={{textDecoration:"none"}} ><button type="button" onClick={scroll} >Update</button></Link>
                <Link to='/admin/delete' style={{textDecoration:"none"}} ><button type="button" onClick={scroll} >Delete</button></Link>
                <Link  style={{textDecoration:"none"}} ><button type="button" id="1" onClick={()=>{localStorage.removeItem('admin'); window.location.reload()}}>Logout</button></Link>
            </div>
            <Outlet/>
        </div>
    )
}

export default Admin