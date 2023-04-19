import React from "react";
import './login.css';
import LOGO from "../../assets/images/speaktruth-low-resolution-logo-white-on-transparent-background.png";
import BG_IMG from "../../assets/images/listen-gfd3aad7e6_1920.jpeg";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isDirty },
  } = useForm({
    defaultValues: { username: "", password: "" },
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

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
              <div className="form-item" onSubmit={handleSubmit(onSubmit)}>
                  <label className="form-item-title" htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-input"
                    {...register("username", {
                      required: {
                        value: true,
                        message: "Please enter a valid username.",
                      },
                      minLength: {
                        value: 2,
                        message: "Username should be at least 2 characters.",
                      },
                    })}
                  />
                  <p className="form-err">{errors.username?.message}</p>
                </div>

                <div className="form-item">
                  <label className="form-item-title" htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    className="form-input"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter a valid password.",
                      },
                      minLength: {
                        value: 6,
                        message: "Password should be at least 6 characters or numbers.",
                      },
                    })}
                  />
                  <p className="form-err">{errors.password?.message}</p>
                </div>

                {/* <button type="submit" className="login-btn" disabled={!isDirty}> */}
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
