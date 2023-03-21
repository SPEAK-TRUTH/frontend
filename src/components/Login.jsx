import React from "react";

const Login = () => {
  return (
    <div className="login w-screen h-screen bg-slate-100 m-0 p-0">
      <div className="flex w-screen h-screen justify-center items-center px-36 mx-auto">
        {/* left */}
        <div className="w-2/5 h-4/5 bg-blue-300">
          <div className="w-full bg-center object-cover bg-[url('../assets/topHeaderImages/speaktruthLogo.png')]"></div>
        </div>
        {/* right */}
        <div className="w-3/5 h-4/5 bg-gray-200 flex justify-center items-center">
          <div className="bg-white flex justify-center items-center shadow-xl h-4/5 w-3/5">
            <div className="bg-white flex flex-col justify-center h-4/5 w-4/5 gap-5">
              <p className="text-center">Welcome SPEAKTRUTH</p>
              <h3 className="text-3xl font-bold text-center">Login</h3>
              {/* Form */}
              <div className="flex flex-col justify-start gap-5">
                <div className="flex flex-col justify-start gap-2">
                  <label className="text-left">Username</label>
                  <input type="text" className="border p-2" />
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <label htmlFor="">Password</label>
                  <input type="password" className="border p-2" />
                </div>
                <button className="cursor-pointer bg-blue-400 w-full text-white p-2 rounded hover:bg-blue-700">
                  Login
                </button>
                <p className="text-center">
                  You don't have an account? {""}
                  <a href="" className="underline text-blue-500">
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
