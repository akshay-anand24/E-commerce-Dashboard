import { useEffect } from 'react';
import './style.css' 
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Card(){
  let navigate=useNavigate()
  let stu;
  let [aaa,setAaa]=useState([])

let cards=async()=>{
    let data =await fetch("http://localhost:8001")
    stu=await data.json()
    if(stu.length!=aaa.length)
    {setAaa(stu)
    
    }
    

   

}

// let func=()=>{
//     navigate('/cardsDescription',{state:{car:7}})
// }

useEffect(()=>{
cards()

    console.log(aaa)
})

    return(
        <div>
            {
            aaa.map((data)=>(
                <span className="card">
                <img className="img"
                    src={data.url} alt="image not found" />
                    
                    <hr/>
                    <div className="text">
        
                        <div>Name:{data.name} </div>
                        <div>Cost:{data.cost.$numberDecimal}</div>
                        <Link to="/cardsDescription" state={{obj:data}}>More</Link>
                        {/* <div onClick={func}>fffffff</div> */}
                        {/* <div>Contact: fghj.</div> */}
                    </div>
            </span>
            )) }

    </div>
    )
}

export default Card;