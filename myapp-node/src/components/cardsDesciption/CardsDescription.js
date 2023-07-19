import React from "react";
import  './style.css'
import { useLocation, useNavigate } from "react-router-dom";


function CardsDescription(){
    window.scrollTo(0,0)
    const location=useLocation()
    let auth=localStorage.getItem('user')
    let navigate=useNavigate()
    let i=1;

   async function cart(){
      if(auth && i==1){
 auth=JSON.parse(auth)
       
      let result=await fetch("http://localhost:8002",{
         method:'put',
         headers:{'Content-Type':'application/json'},
         body:JSON.stringify({username:auth.username,itemObject:location.state.obj,count:1 })
      })
      result= await result.json()
      console.log(result)
      // console.log(auth)
      let cb1=document.getElementById('cb1')
      if(cb1)
      cb1.innerHTML='Added To Cart'
      i++
      setTimeout(()=>{navigate('/cart')},2000)
   }
   else if(auth){}

   else
   navigate('/login')
   }


    return(
        <div className="cardDesc">
         <h1>Item Description </h1>
         <div>
            <img src={location.state.obj.url}></img>
         </div>
         <div id="cscroll">
            <span>{location.state.obj.name}</span>
            <span>&#x20B9;{location.state.obj.cost.$numberDecimal}</span>
          

            <button id="cb1" onClick={cart}>Add TO Cart</button>
            <button id='cb2'>Buy Now</button>
            <p>
         {location.state.obj.description}
            </p>
            <span>
            </span>
         </div>

        </div>
    )
}

export default CardsDescription