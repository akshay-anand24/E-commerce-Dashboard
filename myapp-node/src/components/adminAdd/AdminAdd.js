import { useState } from "react"
import './style.css'
import { useEffect } from "react"
function AdminAdd(){
   let [proname,setProname]=useState("")
  let  [url,setUrl]=useState("")
  let  [cost,setCost]=useState("")
  let  [desc,setDesc]=useState("")
   let [itemid,setItemid]=useState("")

   function resets(){
    setCost("")
    setDesc("")
    setItemid("")
    setProname("")
    setUrl("")
   }


   useEffect(()=>{
    setUrl(url.trim(""))
    setCost(cost.trim())
    setItemid(itemid.trim(""))
    if(proname[0]===" ")
    {alert("space not allowed")
    setProname(proname.trim())}
   })


 async function submitPro(){
    let data=await fetch("http://localhost:8001",{
    method:'post',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({"name":proname,"cost":cost,"url":url,"description":desc,"itemId":itemid})
 })
  let result=await data.json()
  resets()

 }



    return(


        <div className="AdminAdd">
             <h1 className="hhh">Add Item</h1>
   <form >
    <label for="name" >Name:</label>
    <input type="text" name="name" id="name" placeholder="cat" value={proname} onChange={(e)=>{ setProname(e.target.value) }}/>

    <label for="url" >Url:</label>
    <input type="text" name="url" id="url" placeholder="xyx.com/200/44" value={url} onChange={(e)=>{ setUrl(e.target.value) }}/>

    <label for="cost" >Cost:</label>
    <input type="number" name="cost" id="cost" placeholder="24.34" value={cost} onChange={(e)=>{ setCost(e.target.value) }}/>

    <label for="desc" >Description:</label>
    <input type="text" name="desc" id="desc" placeholder="what why how" value={desc} onChange={(e)=>{ setDesc(e.target.value) }}/>

    <label for="itemId" >ItemId:</label>
    <input type="text" name="itemId" id="itemId" placeholder="aedfff453ju4" value={itemid} onChange={(e)=>{ setItemid(e.target.value) }}/>
    
    
    <button type="reset" onClick={resets} >Reset</button>
    <button type="button" onClick={submitPro}>Submit</button>
   </form>
</div>
        
    )
}

export default AdminAdd