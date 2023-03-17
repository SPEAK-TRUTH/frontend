// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





// components
import Home from "./pages/home/Home.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";


// css
import "./App.css"




function App() {

  return (
    <div  className="app" id="outer-container">
      <Router>
        <Routes>
          
          <Route exact path="/" element={<Home />} id="page-wrap" />
          
        </Routes>
        
      </Router>
    </div>
  )
}

export default App
