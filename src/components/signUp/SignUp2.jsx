import React from "react";
import LOGO from "../../assets/images/speaktruth-low-resolution-logo-white-on-transparent-background.png";
import BG_IMG from "../../assets/images/listen-gfd3aad7e6_1920.jpeg";
import { useForm } from "react-hook-form";
import "./signUp2.css";

const SignUp2 = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isDirty },
  } = useForm({
    defaultValues: { username: "", email: "", password: "" },
    mode: "onChange",
  });
  const onSubmit = (data) => console.log(data);

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
              <form className="signup-form" onSubmit={handleSubmit(onsubmit)}>
                {/* <FormItem/> */}
                <div className="form-item">
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
                  <label className="form-item-title" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    {...register("email", {
                        required: {
                          value: true,
                          message: "Please enter a valid Email.",
                        },
                      })}
                    />
                    <p className="form-err">{errors.email?.message}</p>
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

                <button type="submit" className="signup-btn" disabled={!isDirty}>
                  SignUp
                </button>
                <p className="signup-text-msg">
                  You already have an account? {""}
                  <a href="" className="login-link">
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
