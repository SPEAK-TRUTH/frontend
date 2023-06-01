// Import necessary libraries
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './login.css';
import SpeakTruthLogo from "../../assets/images/speaktruth-high-resolution-logo-color-on-transparent-background.png";
import { axiosInstance } from "../../config";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // Handle form submission
  const submitHandler = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const response = await axiosInstance.post('/auth/signin', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/adminOverviewDashboard');
    } catch (error) {
      console.error('Error:', error);
      setError(true);
    }
  };

  // Return login form
  return (
    <div className="login">
      <div className="login-form-container">
        <div className="login-form-logo-wrapper">
          <img src={SpeakTruthLogo} alt="SpeakTruth Logo" />
        </div>
        <div className="login-form-wrapper">
          <div className="login-form-panel-wraper">
            <div className="login-form-panel">
              <h1>Login into your account</h1>
              <form className="login-form" onSubmit={submitHandler}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  className="loginInput"
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required={true}
                  className="loginInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="login-form-submit-button" type="submit">Login</button>
              </form>
              {error && <span style={{color: "red"}}>Username and password do not match.</span>}

              <div style={{marginTop: "30px", textAlign: "center"}}>
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
