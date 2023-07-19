import { json } from 'react-router-dom'
import './style.css'
import { useState } from 'react'
import { useEffect } from 'react'
function Cart(){

    let auth=localStorage.getItem('user')
    let i=1
    if(i){
        auth=JSON.parse(auth)
        i--
    }

    let [cartItems,setCartItems]=useState([])
    let [total,setTotal]=useState(0)
    let stu;
    let cart=async()=>{
        let result=await fetch("http://localhost:8002/cart",{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username:auth.username})
        })
        stu= await result.json()
        if(cartItems.length!=stu.length)
        setCartItems(stu)
       stu=0
        for(let j=0;j<cartItems.length;j++){
        stu=stu+cartItems[j].itemObject.cost.$numberDecimal * cartItems[j].count
        }
        if(stu!=0&&total===0)
        setTotal(Math.round(stu))
    }


    async function plus(data){
        let result=await fetch("http://localhost:8002/plus",{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username:auth.username,itemObject:data.itemObject})
        })
        result=await result.json()
       window.location.reload()

    }
      
    async function minus(data){

        if(data.count>1){
        let result=await fetch("http://localhost:8002/minus",{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username:auth.username,itemObject:data.itemObject})
        })
        result=await result.json()
        window.location.reload()}
        else
        del(data)

    }
    async function del(data){
        let result= await fetch("http://localhost:8002",{
            method:'delete',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({username:auth.username,itemObject:data.itemObject})
        })
        window.location.reload()
    }
      


    useEffect(()=>{
        cart()
    })



    return(
        <div>

   <h1 id="carth">Cart</h1>
   <div class="carts">


      {
        cartItems.map((data)=>(
      
      <div class="cart-card">
         <div id="imgdiv"><img src={data.itemObject.url} alt="no img found"/></div>
         <div id="detailsdiv"><div>{data.itemObject.name}</div><div>cost:{data.itemObject.cost.$numberDecimal}</div><div>total:{data.itemObject.cost.$numberDecimal * data.count}</div>
        <div id="adsu">
        <div id="btn-" onClick={()=>{minus(data)}}>-</div><div>{data.count}</div><div id="plus" onClick={()=>{plus(data)}}>+</div>
        
    
        </div>
        </div>
    </div>
))}

   
<div class="empty"></div>


</div>
<div class="total">
    <div>Total: &#x20B9; {total} </div>
    <button>Check out</button>
</div>
</div>
    )
}
export default Cart