import React from "react";
import "./LogInForm.css";
import Hospital from "../assets/hospital.jpg";

const LogInForm = () => {
  return (
    <div className="loginpage">
      <img src={Hospital} className="logo" alt="" />
      
      <div className="cover">
        <h1 className="login-text">Login</h1>
        
        <input type="text" placeholder="ID"></input>
        <input type="text" placeholder="Password"></input>
        
        <button className="login-btn">Login</button>

      </div>
    </div>
  );
};

export default LogInForm;
