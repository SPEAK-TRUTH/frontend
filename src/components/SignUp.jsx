import React from "react";
import IMAGE from "../assets/topHeaderImages/speaktruthLogo.png";

const SignUp = () => {
  return (
    <div className="w-screen h-screen bg-slate-100 m-0 p-0">
      <div className="flex w-screen h-screen justify-center items-center px-6 md:px-12 lg:px-36 mx-auto">
        {/* left */}
        <div className="hidden md:block md:w-2/5">
          <div className="h-full">
            <img
              src={IMAGE}
              alt="logo"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        {/* right */}
        <div className="w-full md:w-3/5 md:h-4/5 h-auto py-6 lg:py-0 bg-[#D9D9D9] flex justify-center items-center container">
          <div className="bg-white flex justify-center py-10  items-center shadow-xl shadow-gray-500 h-4/5 lg:w-3/5 w-4/5 container">
            <div className="flex flex-col justify-between h-auto w-4/5 container box-border">
              <p className="text-center text-sm md:text-base md:pt-6">
                Welcome to SPEAKTRUTH
              </p>
              <h3 className="text-3xl font-bold text-center my-4">Sign Up</h3>
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
