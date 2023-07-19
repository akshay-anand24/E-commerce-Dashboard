
function loadCall(){

let menu=document.getElementsByClassName('dropbox')[0];
let contentbox=document.getElementsByClassName('contentbox')[0];
menu.onclick=()=>{

    if(contentbox.style.display==="none")
    contentbox.style.display="block"
    else
    contentbox.style.display="none"
}
window.onclick=(e)=>{
    if(!e.target.matches('.dropbox'))
    contentbox.style.display='none'
}



let x = window.matchMedia('(max-width: 768px)')
if (x.matches) {
   let navbar_items= document.getElementsByClassName('liststyle')[0]
   navbar_items.hidden=true
   let navbar_btn=document.getElementsByClassName('btn')[0]
   navbar_btn.hidden=false
   navbar_btn.onclick=()=>{
    if(navbar_items.hidden===true) 
    navbar_items.hidden=false
    else
    navbar_items.hidden=true

  }
}
}



export default loadCall;