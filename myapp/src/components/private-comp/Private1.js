import {Navigate,Outlet} from 'react-router-dom'
import React from 'react'

function Private1(){


    const auth=localStorage.getItem('user')
    console.log(auth)
    return auth?<Outlet/>:<Navigate to='/login'/>
}

export default Private1