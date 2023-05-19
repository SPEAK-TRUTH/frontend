import { useState } from "react";
import { Link } from "react-router-dom";
import './signup.css';
import SpeakTruthLogo from "../../assets/images/speaktruth-high-resolution-logo-color-on-transparent-background.png";


const Signup = () => {
  
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);
    // Add code here to handle sign up
  };

  return (
    <div className="signup">
      <div className="signup-form-container">
  
        {/* box1 */}
        <div className="signup-form-logo-wrapper">
          <img src={SpeakTruthLogo} alt="" />
        </div>
  
        {/* box2 */}
        <div className="signup-form-wrapper">
          <div className="signup-form-panel-wraper">
            <div className="signup-form-panel">
              <h1>Create a new account</h1>
              <form className="signup-form" onSubmit={submitHandler}>
                <label>Email</label>
                <input
                  type="email"
                  className="signupInput"
                  required={true}
                />
                <label>Username</label>
                <input
                  type="text"
                  className="signupInput"
                  required={true}
                />
                <label>Password</label>
                <input
                  type="password"
                  className="signupInput"
                  required={true}
                />
                <button className="signup-form-submit-button" type="submit">
                  Sign Up
                </button>
              </form>
              {error && <span style={{color: "red", marginTop: "5px"}}>Something went wrong. Please try again.</span>  }
  
              {/* login */}
              <div style={{marginTop: "15px", textAlign: "center"}}>
                <span style={{fontSize: "14px", color: "#4B5563"}}>Already have an account?</span>
                <Link to="/login" style={{color: "#2563EB", marginLeft: "5px", textDecoration: "none"}}>Log in</Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Signup;
