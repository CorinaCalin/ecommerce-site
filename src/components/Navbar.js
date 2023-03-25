import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/ecommerce.svg'

export const Navbar = () => {
    return (
        <div className='navbox'>
            <div className='leftside'>
            <img src={logo} alt=""/>
            <div className='rightside'></div>
            <Link to='/singup' className='navlinks'>SING UP</Link>
            <Link to='/login'className='navlinks'>Login</Link>
        </div>
        </div>
    )
}