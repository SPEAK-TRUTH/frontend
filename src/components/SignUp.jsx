import React from "react";
import LOGO from "../assets/images/speaktruth-low-resolution-logo-white-on-transparent-background.png";
import BG_IMG from "../assets/images/listen-gfd3aad7e6_1920.jpeg";

const SignUp = () => {
  return (
    <div className="w-screen h-screen bg-slate-100 m-0 p-0 relative">
      <img src={BG_IMG} alt="" className="object-cover w-screen h-screen " />
      <div className="flex w-screen h-screen justify-center items-center px-6 md:px-12 lg:px-36 mx-auto top-0 left-0 absolute">
        {/* left */}
        <div className="hidden relative md:block bg-[#27A2DB] md:w-2/5 md:h-4/5 h-auto">
          <img
            src={LOGO}
            alt="logo"
            className="object-cover absolute w-11/12 top-1/2 left-4"
          />
        </div>
        {/* right */}
        <div className="w-full md:w-3/5 md:h-4/5 h-auto pt-28 pb-10 sm:py-9 lg:py-0 sm:bg-[#D9D9D9] bg-[#27A2DB] flex justify-center items-center container relative">
          <img
            src={LOGO}
            alt="logo"
            className="sm:hidden inline-block object-cover absolute w-2/3 top-10 left-18"
          />
          <div className="bg-white flex justify-center py-10 items-center shadow-xl shadow-gray-500 h-4/5 lg:w-3/5 w-4/5 container">
            <div className="flex flex-col justify-between h-auto w-4/5 container box-border">
              <p className="text-sm md:text-base md:pt-6">
                Welcome to SPEAKTRUTH
              </p>
              <h3 className="text-3xl font-bold my-4">Sign Up</h3>
              {/* Form */}
              <div className="flex flex-col justify-start md:gap-3">
                {/* <FormItem/> */}
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-left">Username</label>
                  <input type="text" className="border p-2 mb-2 md:m-0" />
                </div>

                <div className="flex flex-col justify-start gap-2">
                  <label className="text-left">Email</label>
                  <input type="email" className="border p-2 mb-2 md:m-0" />
                </div>

                <div className="flex flex-col justify-center gap-2">
                  <label htmlFor="">Password</label>
                  <input type="password" className="border p-2 mb-2 md:m-0" />
                </div>

                <button className="cursor-pointer bg-[#27A2DB] w-full text-white my-5 md:mt-3 md:mb-0 p-2 rounded hover:bg-blue-700">
                  SignUp
                </button>
                <p className="text-center text-sm md:text-base md:pb-6">
                  You already have an account? {""}
                  <a href="" className="underline text-blue-500">
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
