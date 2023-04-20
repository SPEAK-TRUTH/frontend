
// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import FAQ from "./pages/FAQ/FAQ.jsx";
import Footer from "./components/footer/Footer.jsx";

// import Login from "./components/login";
// import SignUp2 from "./components/SignUp2";

// css
import "./App.css"

function App() {

  return (
    <div  className="app" id="outer-container">

      <Home />
      <About/>
      <FAQ />
      <Footer />

      {/* <Login /> */}
      {/* <SignUp2/> */}

    </div>
  );
}

export default App;
