import React from "react";
import './login2.css';
import LOGO from "../../assets/images/speaktruth-low-resolution-logo-white-on-transparent-background.png";
import BG_IMG from "../../assets/images/listen-gfd3aad7e6_1920.jpeg";
import FormItem from "../formItem/FormItem";

const Login = () => {
  return (
    <div className="login-container">
      <img src={BG_IMG} alt="" className="login-bg-img" />
      <div className="login-wrapper">
        {/* left */}
        <div className="login-left">
          <img
            src={LOGO}
            alt="logo"
            className="left-img"
          />
        </div>
        {/* right */}
        <div className="login-right">
          <img
            src={LOGO}
            alt="logo"
            className="right-logo"
          />
          <div className="login-right-container">
            <div className="login-right-wrapper">
              <p className="text-welcome">Welcome to SPEAKTRUTH</p>
              <h3 className="text-login">Login</h3>
              {/* Form */}
              <div className="login-form">
                <FormItem item={'Username'} />
                <FormItem item={'Password'} />
                <button className="login-btn">
                  Login
                </button>
                <p className="text-msg">
                  You don't have an account? {""}
                  <a href="" className="signup-link">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
