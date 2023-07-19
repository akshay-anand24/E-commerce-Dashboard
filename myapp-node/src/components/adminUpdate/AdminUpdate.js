import { useEffect } from 'react';
import './style.css' 
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


function AdminUpdate(){

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

        


  
  useEffect(()=>{
  cards()
  
      console.log(object)
  })
  
      return(
          <div className='adminUpdate'>
            <input type='text' placeholder='search delete item...' value={search} onChange={(e)=>{setSearch(e.target.value)}} />
              {
              object.map((data)=>(
                  <span className="cardUpdate">
                  <img className="imgUpdate"
                      src={data.url} alt="image not found" />
                      
                      <hr/>
                      <div className="textUpdate">
          
                          <div>Name:{data.name} </div>
                          <div>Cost:{data.cost.$numberDecimal}</div>
                    <Link to="/admin/update/card" state={{obj:data}}>update</Link>
                        
                      </div>
              </span>
              )) }
  
      </div>)
}

export default AdminUpdate