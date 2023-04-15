import React from "react";
import LOGO from "../../assets/images/speaktruth-low-resolution-logo-white-on-transparent-background.png";
import BG_IMG from "../../assets/images/listen-gfd3aad7e6_1920.jpeg";
import FormItem from "../formItem/FormItem";
import './signUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <img src={BG_IMG} alt="" className="signup-bg-img" />
      <div className="signup-wrapper">
        {/* left */}
        <div className="signup-left">
          <img src={LOGO} alt="logo" className="left-img" />
        </div>
        {/* right */}
        <div className="signup-right">
          <img src={LOGO} alt="logo" className="right-logo" />
          <div className="signup-right-container">
            <div className="signup-right-wrapper">
              <p className="text-welcome">Welcome to SPEAKTRUTH</p>
              <h3 className="text-signup">Sign Up</h3>
              {/* Form */}
              <div className="signup-form">
                {/* <FormItem/> */}
                <FormItem item={"Username"} />
                <FormItem item={"Email"} />
                <FormItem item={"Password"} />

                <button className="signup-btn">SignUp</button>
                <p className="signup-text-msg">
                  You already have an account? {""}
                  <a href="" className="login-link">
                    Login
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

export default SignUp;
