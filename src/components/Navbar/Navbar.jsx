import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
            <img src={logo} alt="logo" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
      </div>
    </div>
  )
}

export default Navbar
