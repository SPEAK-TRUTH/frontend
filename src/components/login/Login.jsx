import { useState } from "react";
import './login.css';
import LOGO from "../../assets/images/speaktruth-low-resolution-logo-white-on-transparent-background.png";
import BG_IMG from "../../assets/images/listen-gfd3aad7e6_1920.jpeg";
import { useForm } from "react-hook-form";

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
          <img src={LOGO} alt="" />
        </div>

        {/* box2 */}
        <div className="login-form-wrapper">
          <div className="login-form-panel-wraper">
            <div className="login-form-panel">
              <h3>Welcome to SPEAKTRUTH</h3>
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
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
