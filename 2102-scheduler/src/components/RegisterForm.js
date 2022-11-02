import React, {useState} from "react";
import {Link} from 'react-router-dom'
import Hospital from "../assets/hospital.jpg";
import "./RegisterForm.css";

const RegisterForm = () => {

  // **to implement sessions
  // ***using hook for invalid information login 
  // const [popupStyle, showPopup] = useState("hide")

  // const popup = () => {
  //   showPopup("login-popup")
  //   setTimeout(() => showPopup("hide"), 3000)
  // }


  return (
    <div className="page-register">
      <img src={Hospital} className="logo-register" alt="" />
      
      <div className="cover-register">
        <h1 className="text-register">Register</h1>

        <input className="input-register" type="text" placeholder="ID"></input>
        <input className="input-register" type="text" placeholder="First Name"></input>
        <input className="input-register" type="text" placeholder="Last Name"></input>
        <input className="input-register" type="text" placeholder="Password"></input>
        <input className="input-register" type="text" placeholder="Confirm Password"></input>
        
        <div className="register-page-buttons">
          <div className="register-btn">
            <Link to='/'>Register</Link>
          </div>
          <div className="already-registered-btn">
            <Link to='/'>Already Registered</Link>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default RegisterForm;
