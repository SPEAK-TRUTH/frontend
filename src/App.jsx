import { useState } from "react";
import "./App.css";
import Login from "./components/login";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Login />
      {/* <SignUp/> */}
    </div>
  );
}

export default App;
