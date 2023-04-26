// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/home/Home.jsx";
import UserReport from "./pages/userReport/UserReport.jsx";
import SignUp2 from "./components/signUp/SignUp2.jsx";
// css
import "./App.css"

function App() {

  return (
    <div  className="app" id="outer-container">
    {/* <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/userReport" element={<UserReport />} />
      </Routes>
    </Router> */}
    <SignUp2 />
    </div>
  );
}

export default App;
