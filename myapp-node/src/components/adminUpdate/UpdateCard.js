import { useEffect, useState } from 'react';
import './UpdateCard.css'
import { Location, useLocation } from 'react-router-dom'

function UpdateCard(){
    let location=useLocation();
    let [name,setName]=useState();
    let [cost,setCost]=useState();
    let [url,setUrl]=useState()
    let [itemId,setItemId]=useState()
    let [desc,setDesc]=useState()



    function reset(){
        setCost("")
        setDesc("")
        setItemId("")
        setName("")
        setUrl("")
    }


    useEffect(()=>{
    document.getElementById('uform').scrollIntoView()
    })

 async  function namechange(){
    let a=window.confirm("are you sure")
    if(a){
        let result= await fetch("http://localhost:8001",{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"_id":location.state.obj._id,"update":{"name":name}})
        })
         result=await result.json()
         if(result.modifiedCount)
         window.location.reload()
    }
 }



 async  function urlchange(){
    let a=window.confirm("are you sure")
    if(a){
        let result= await fetch("http://localhost:8001",{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"_id":location.state.obj._id,"update":{"url":url}})
        })
         result=await result.json()
         if(result.modifiedCount)
         window.location.reload()
    }
 }



 async  function costchange(){
    let a=window.confirm("are you sure")
    if(a){
        let result= await fetch("http://localhost:8001",{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"_id":location.state.obj._id,"update":{"cost":cost}})
        })
         result=await result.json()
         if(result.modifiedCount)
         window.location.reload()
    }
 }



 async  function itemIdchange(){
    let a=window.confirm("are you sure")
    if(a){
        let result= await fetch("http://localhost:8001",{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"_id":location.state.obj._id,"update":{"itemId":itemId}})
        })
         result=await result.json()
         if(result.modifiedCount)
         window.location.reload()
    }
 }



 async  function descchange(){
    let a=window.confirm("are you sure")
    if(a){
        let result= await fetch("http://localhost:8001",{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"_id":location.state.obj._id,"update":{"description":desc}})
        })
         result=await result.json()
         if(result.modifiedCount)
         window.location.reload()
    }
 }

 async  function allchange(){
    let a=window.confirm("are you sure")
    if(a){
        let result= await fetch("http://localhost:8001",{
            method:'put',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({"_id":location.state.obj._id,"update":{"description":desc,"name":name,"url":url,"cost":cost,"itemId":itemId}})
        })
         result=await result.json()
         if(result.modifiedCount)
         window.location.reload()
    }
 }








    return(
        <div className="UpdateCard">
            <div className='UCdiv'>
                <img src={location.state.obj.url} alt='no image found'></img>
                
            </div>
            <div className='Udetails'>
            <div className='uleft'>
            <div>Name:{location.state.obj.name}</div>
                <div>Cost:{location.state.obj.cost.$numberDecimal}</div>
                <div>url:{location.state.obj.url} </div>
                <div>ItemId:{location.state.obj.itemId}</div>
                </div>
            <div className='uright'>
                <span>Description:<br/><br/>{location.state.obj.description}</span>
                </div>
        </div>
       <div id="uform"></div>
        <form >
        <div><label htmlFor="name">Name:</label></div>
        <div><input type="text" name="name" id="name" value={name} placeholder="Cat" onChange={(e)=>{setName(e.target.value)}} /><button type='button'onClick={namechange}>Update name only</button></div><br/>
        
        <div><label htmlFor="cost">Cost:</label></div>
        <div><input type="number" name="name" id="cost" value={cost} placeholder="22.34" onChange={(e)=>{setCost(e.target.value)}}/><button type='button'onClick={costchange}>Update cost only</button></div><br/>
        
        <div><label htmlFor="url">Url:</label></div>
        <div><input type="text" name="name" id="url" value={url} placeholder="xyz.com" onChange={(e)=>{setUrl(e.target.value)}}/><button type='button'onClick={urlchange}>Update url only</button></div><br/>
        
        <div><label htmlFor="itemid">Item ID:</label></div>
        <div><input type="text" name="name" id="itemid" value={itemId} placeholder="a223dfc34q23" onChange={(e)=>{setItemId(e.target.value)}}/><button type='button'onClick={itemIdchange}>Update Item Id only</button></div><br/>
        
        <div><label htmlFor="desc">Description:</label></div>
        <div><input type="text" name="name" id="desc" value={desc} placeholder="why what how" onChange={(e)=>{setDesc(e.target.value)}}/><button type='button'onClick={descchange}>Update Description only</button></div><br/>
        
        <button type='reset' onClick={reset}>Reset</button>
        <button type='button' onClick={allchange}>Update All</button>

        </form>
        </div>
    )
}
export default UpdateCard