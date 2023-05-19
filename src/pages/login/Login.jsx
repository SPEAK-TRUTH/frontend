import { useState } from "react";
import { Link } from "react-router-dom";
import './login.css';
import SpeakTruthLogo from "../../assets/images/speaktruth-high-resolution-logo-color-on-transparent-background.png";

const Login = () => {
  
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);
  };

  return (
    <div className="login">
      <div className="login-form-container">
  
        {/* box1 */}
        <div className="login-form-logo-wrapper">
          <img src={SpeakTruthLogo} alt="" />
        </div>
  
        {/* box2 */}
        <div className="login-form-wrapper">
          <div className="login-form-panel-wraper">
            <div className="login-form-panel">
              <h1>Login into your account</h1>
              <form className="login-form" onSubmit={submitHandler}>
                <label>Username</label>
                <input
                  type="text"
                  className="loginInput"
                  required={true}
                />
                <label>Password</label>
                <input
                  type="password"
                  className="loginInput"
                  required={true}
                />
                <button className="login-form-submit-button" type="submit">
                  Login
                </button>
              </form>
              {error && <span style={{color: "red", marginTop: "5px"}}>Username and password do not match.</span>  }
  
              {/* Sign up */}
              <div style={{marginTop: "15px", textAlign: "center"}}>
                <span style={{fontSize: "14px", color: "#4B5563"}}>Don’t have an account yet?</span>
                <Link to="/signup" style={{color: "#2563EB", marginLeft: "5px", textDecoration: "none"}}>Sign up</Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Login;
