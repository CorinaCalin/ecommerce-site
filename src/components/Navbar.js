import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/image1.svg'

export const Navbar = () => {
    return (
        <div className='navbox'>
            <div className='leftside'>
            <img src={logo} alt="" />
            </div>
            <div className='rightside'>
            <Link to='/singup' className='navlinks'>SING UP</Link>
            <Link to='/login'className='navlinks'>Login</Link>
        </div>
    </div>
    )
}