import React, { useState } from "react";
import { Link } from "react-router-dom";

import Hospital from "../assets/hospital.jpg";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
    // const[click, setClick] = useState(false)
    // const [dropdown, setDropdown] = useState(false)
    // const handleClick = () => setClick(!click)
    // const closeMobileMenu = () => setClick(false)
    //     const onMouseEnter = () => {
    //         if (window.innerWidth < 960) {
    //           setDropdown(false);
    //         } else {
    //           setDropdown(true);
    //         }
    //       };
    //       const onMouseLeave = () => {
    //         if (window.innerWidth < 960) {
    //           setDropdown(false);
    //         } else {
    //           setDropdown(false);
    //         }
    //       };
    // return (
    //     <>
    //     <nav className='navbar'>
    //     <img src={Hospital} className='navbar-logo' alt='' />
    //       <Link to='/' onClick={closeMobileMenu}> </Link>
    //       <div className='menu-icon' onClick={handleClick}>
    //         <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
    //       </div>
    //       <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    //         <li className='nav-item'>
    //           <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
    //         </li>
    //         <li className='nav-item'
    //           onMouseEnter={onMouseEnter}
    //           onMouseLeave={onMouseLeave}
    //         >
    //           <Link to='/scheduling' className='nav-links' onClick={closeMobileMenu}>
    //             Scheduling <MdArrowDropDown />
    //           </Link>
    //           {dropdown && <Dropdown />}
    //         </li>
    //         <li className='nav-item'
    //         onMouseEnter2={onMouseEnter}
    //         onMouseLeave2={onMouseLeave}
    //         >
    //           <Link to='/tracking' className='nav-links' onClick={closeMobileMenu}>
    //             Tracking <MdArrowDropDown />
    //           </Link>
    //           {dropdown && <Dropdown />}
    //         </li>
    //         <li className='nav-item'>
    //           <Link to='/user' className='nav-links' onClick={closeMobileMenu}>
    //             <FaUserCircle size="2em"/>
    //           </Link>
    //         </li>
    //       </ul>
    //     </nav>
    //   </>
    // )
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Hospital}
                        alt="Tan Tock Seng Hospital Logo"
                        width="150"
                        height="60"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Scheduling" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/SlotAllocation">
                                Slot Allocation
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/EquipmentScheduling">
                                Equipment Scheduling
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Tracking" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/EquipmentOverview">
                                Equipment Overview
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/LogRecords">
                                Log Records
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
