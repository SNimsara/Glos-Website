import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt="" />
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Collection</li>
            <li>About Us</li>
            <li>Contact</li>
        </ul>

    </div>
  )
}

export default Navbar