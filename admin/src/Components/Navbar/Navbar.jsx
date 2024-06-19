import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <div className="nav-user">
          <p>Admin</p>
          <img src={navProfile} className='nav-profile' alt="" />
        </div>
        
    </div>
  )
}

export default Navbar
