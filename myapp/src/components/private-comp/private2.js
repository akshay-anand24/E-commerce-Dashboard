import {Navigate,Outlet} from 'react-router-dom'
import React from 'react'

function Private2(){


    const auth=localStorage.getItem('admin')
    console.log(auth)
    return auth?<Outlet/>:<Navigate to='/'/>
}

export default Private2