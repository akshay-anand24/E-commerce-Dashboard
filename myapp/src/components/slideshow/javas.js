function Loadscript(){

let a=0; console.log(a)
let prev=document.getElementsByClassName('prev')[0]
let next=document.getElementsByClassName('next')[0]
document.getElementsByClassName('hidden')[0].style.display="block"
prev.onclick=()=>{
    let b=a;
    if(a==0)
    a=2;
    else
    a--;
    console.log(a)
    document.getElementsByClassName('hidden')[b].style.display="none"
    document.getElementsByClassName('hidden')[a].style.display="block"
}


next.onclick=()=>{ console.log(11111)
    let b=a;
    if(a==2)
    a=0;
    else
    a++;
    document.getElementsByClassName('hidden')[b].style.display="none"
    document.getElementsByClassName('hidden')[a].style.display="block"
}

let alpha=(i)=>{
    setTimeout(()=>{ let b=a;
        if(a==2)
        a=0;
        else
        a++;
        let dada
        dada=document.getElementsByClassName('hidden')

        if(dada.length){
        dada[b].style.display="none"
        dada[a].style.display="block"}
      },5*i*1000)

    }
let i=1
for( i;i<10;i++)
{
    alpha(i)
}


}
export default Loadscript

