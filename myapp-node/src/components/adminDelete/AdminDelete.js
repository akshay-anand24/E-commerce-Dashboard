import { useEffect } from 'react';
import './style.css' 
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function AdminDelete(){

    let navigate=useNavigate()
    let stu;
    let [search,setSearch]=useState("")
    let [object,setObject]=useState([])
  
  let cards=async()=>{
      let data =await fetch("http://localhost:8001/search",{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({"key":search})
      })
      stu=await data.json()
      if(stu.length!=object.length)
      {setObject(stu)
      }    
  
  }

        
 let deleteObject=async(data)=>{
    let a= window.confirm("are you sure?");
    
    if(a){
    let result =await fetch("http://localhost:8001",{
     method:'delete',
     headers:{'Content-Type':'application/json'},
     body:JSON.stringify({"_id":data._id})
    })
   result=await result.json()
   if(result.deletedCount)
   window.location.reload()}
 
   }

  
  useEffect(()=>{
  cards()
  
      console.log(object)
  })
  
      return(
          <div className='adminDelete'>
            <input type='text' placeholder='search delete item...' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
              {
              object.map((data)=>(
                  <span className="cardDelete">
                  <img className="imgDelete"
                      src={data.url} alt="image not found" />
                      
                      <hr/>
                      <div className="textDelete">
          
                          <div>Name:{data.name} </div>
                          <div>Cost:{data.cost.$numberDecimal}</div>
                          <button onClick={()=>{deleteObject(data)}}>Delete</button>
                      </div>
              </span>
              )) }
  
      </div>)
}

export default AdminDelete