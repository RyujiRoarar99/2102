import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaUserCircle, FaBars, FaTimes } from 'react-icons/fa'
import { MdArrowDropDown } from "react-icons/md";
import Hospital from '../assets/hospital.jpg'
import Dropdown from './Dropdown'
import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

        const onMouseEnter = () => {
            if (window.innerWidth < 960) {
              setDropdown(false);
            } else {
              setDropdown(true);
            }
          };
          const onMouseLeave = () => {
            if (window.innerWidth < 960) {
              setDropdown(false);
            } else {
              setDropdown(false);
            }
          };

    return (
        <>
        <nav className='navbar'>
        <img src={Hospital} className='navbar-logo' alt='' />
          <Link to='/' onClick={closeMobileMenu}> </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>
            <li className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link to='/scheduling' className='nav-links' onClick={closeMobileMenu}>
                Scheduling <MdArrowDropDown />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'
            onMouseEnter2={onMouseEnter}
            onMouseLeave2={onMouseLeave}
            >
              <Link to='/tracking' className='nav-links' onClick={closeMobileMenu}>
                Tracking <MdArrowDropDown />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className='nav-item'>
              <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
                <FaUserCircle size="2em"/>
              </Link>
            </li>
          </ul>
        </nav>
      </>
    )
}

export default Navbar