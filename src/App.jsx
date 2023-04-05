// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





// components
import Home from "./pages/home/Home.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";


// css
import "./App.css"
import About from "./pages/about/About.jsx";




function App() {

  return (
    <div  className="app" id="outer-container">
          
      <Home />
      <About/>
          
          
    </div>
  )
}

export default App
