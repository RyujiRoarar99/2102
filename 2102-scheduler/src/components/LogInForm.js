import React, {useState} from "react";
import "./LogInForm.css";
import Hospital from "../assets/hospital.jpg";


const LogInForm = () => {

  // **to implement sessions
  // ***using hook for invalid information login 
  // const [popupStyle, showPopup] = useState("hide")

  // const popup = () => {
  //   showPopup("login-popup")
  //   setTimeout(() => showPopup("hide"), 3000)
  // }


  return (
    <div className="loginpage">
      <img src={Hospital} className="logo" alt="" />
      
      <div className="cover">
        <h1 className="login-text">Login</h1>
        
        <div>
          {/* <label className="label-login">ID</label> */}
          <input className="input-login" type="text" placeholder="ID"></input>
        </div>
        <div>
          {/* <label className="label-login">Password</label> */}
          <input className="input-login" type="text" placeholder="Password"></input>
        </div>
        
        <div className="login-page-buttons">
          <div className="login-btn">Login</div>
          <div className="register-btn">Register</div>
        </div>
      
      </div>
    </div>
  );
};

export default LogInForm;
