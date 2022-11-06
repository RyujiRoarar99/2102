import React, {useState} from "react";
import {Link} from 'react-router-dom'
import Hospital from "../assets/hospital.jpg";
import "./LogInForm.css";

const LogInForm = () => {

  // **to implement sessions
  // ***using hook for invalid information login 
  // const [popupStyle, showPopup] = useState("hide")

  // const popup = () => {
  //   showPopup("login-popup")
  //   setTimeout(() => showPopup("hide"), 3000)
  // }


  return (
    <div className="page-login">
      <img src={Hospital} className="logo-login" alt="" />
      
      <div className="cover-login">
        <h1 className="text-login">Login</h1>
        
        <input className="input-login" type="text" placeholder="ID"></input>
        <input className="input-login" type="text" placeholder="Password"></input>
        
        <div className="login-page-buttons">
          <div className="login-btn">
            <Link to='/Home'>Login</Link>
          </div>
          <div className="register-btn">
            <Link to='/RegisterPage'>Register</Link>
          </div>
        </div>
      
      </div>
    </div>
  );
};

export default LogInForm;
