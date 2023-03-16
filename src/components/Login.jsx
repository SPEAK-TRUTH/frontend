import React from "react";

const Login = () => {
  return (
    <div className="login w-screen h-screen bg-slate-100 m-0 p-0 ">
      <div className="flex justify-center h-4/5 w-4/5 mx-auto">
        <div className="left w-1/2 bg-blue-400">
          <h3 className="">aaa</h3>
        </div>

        <div className="right w-1/2 bg-gray-400">
          <div className="bg-white flex justify-center h-4/5 w-4/5">
            <div className="bg-white flex flex-col justify-center h-4/5 w-4/5 gap-5">
              <p className="text-center">Welcome SPEAKTRUTH</p>
              <h3 className="text-3xl font-bold text-center">Login</h3>

              <div className="form flex flex-col justify-start gap-5">
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-left">Username</label>
                  <input type="text" className="border"/>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <label htmlFor="">Email</label>
                  <input type="email" className="border" />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <label htmlFor="">Password</label>
                  <input type="password" className="border" />
                </div>
                <button className="cursor-pointer bg-blue-400 w-full text-white p-2 rounded">
                  Login
                </button>
                <p className="text-center">
                  You don't have an account? {''}
                  <a href="" className="underline text-blue-500">
                     SignUp
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
