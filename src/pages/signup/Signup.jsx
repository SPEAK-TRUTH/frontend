import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './signup.css';
import SpeakTruthLogo from "../../assets/images/speaktruth-high-resolution-logo-color-on-transparent-background.png";
import { axiosInstance } from "../../config";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // Add code here to handle sign up
    try {
      const response = await axiosInstance.post('api/auth/signup', { username, email, password });

      console.log(response.data);
      console.log('User signed up!');
      navigate('/login');
    } catch (error) {
      console.error('Error:', error);
    }
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
                
                <label>Username</label>
                <input
                  id="username"
                  name="username"
                  value={username}
                  type="text"
                  autoComplete="username"
                  className="signupInput"
                  required={true}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <label>Email</label>
                <input
                  type="email"
                  className="signupInput"
                  required={true}
                  name="email"
                  value={email}
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                   id="password"
                   name="password"
                   type="password"
                   value={password}
                   autoComplete="new-password"
                  className="signupInput"
                  required={true}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="signup-form-submit-button" type="submit">
                  Sign Up
                </button>
              </form>
  
              {/* login */}
              <div style={{marginTop: "30px", textAlign: "center"}}>
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
