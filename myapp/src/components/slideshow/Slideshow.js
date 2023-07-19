
import './style.css'
import Loadscript from './javas'
import { useEffect } from 'react'

function SLideshow(){
    window.scrollTo(0,0)
    useEffect(()=>{
        Loadscript();
    })

    return(
        <div>
           
        
           <div className="slideshow-container">

            <div className="rText"><div className="mar">sA_arTworks </div></div>
        
        
        
        
        <div className="slide" >
            <img  className="slide-img hidden" src="https://loremflickr.com/7000/6500" alt="no image found"/>
            <img className="slide-img hidden" src="https://loremflickr.com/5000/4500" alt="no image found"/>
            <img className="slide-img hidden" src="https://loremflickr.com/6000/5500" alt="no image found"/>
            <div className="prev">&#10094;</div>
            <div className="next">&#10095;</div>
        </div>
            
         </div>
          
            
        
        
        </div>)
   
}

export default SLideshow