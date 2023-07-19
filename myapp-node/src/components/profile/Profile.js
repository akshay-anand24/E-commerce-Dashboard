import './style.css'
function Profile(){
    return(
        

<div>
<div className="profile1">
    <div className="profimg"><img src="https://loremflickr.com/5000/4000" alt="No img found"/></div>
    <div className="profdesc">
        <div>Akshay Anand</div>
        <div>Btech 3rd Year</div>
        <div>PDPM-IIITDM Jabalpur</div>
    </div>
</div>


<div className="profile2" hidden>   <div>
     <div className="profimg2"><img src="https://loremflickr.com/5000/4500" alt="no img found"/></div></div>
<div className="profdesc2">
    <div>Akshay Anand</div>
    <div>Btech 3rd Year</div>
    <div>PDPM-IIITDM Jabalpur</div>
</div></div>
</div>

    )
}

export default Profile