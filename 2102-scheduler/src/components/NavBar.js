import React, { useState } from "react";
import { Link } from "react-router-dom";

import Hospital from "../assets/hospital.jpg";
import userProfile from "../assets/userProfile.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
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
                        <NavDropdown
                            title={
                                <img
                                    className="thumbnail-image"
                                    src={userProfile}
                                    alt="user pic"
                                />
                            }
                            id="basic-nav-dropdown"
                            className="nav-without-caret"
                            align="end"
                        >
                            <NavDropdown.Item disabled>Name</NavDropdown.Item>
                            <NavDropdown.Item href="/LogOut">
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
