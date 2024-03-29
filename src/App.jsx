// library
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Home from "./pages/home/Home.jsx";
import UserReport from "./pages/userReport/UserReport.jsx";

import AdminReport from "./pages/adminReport/AdminReport.jsx"
import AdminReportDashboard from "./components/adminReportDashboard/AdminReportDashboard.jsx";
import AdminOverviewDashboard from "./components/adminOverviewDashboard/AdminOverviewDashboard.jsx"
import CheckReport from "./components/checkReport/CheckReport.jsx"
import Confirmation from "./components/confirmation/Confirmation.jsx"
import ReportForm from "./pages/reportForm/ReportForm.jsx";

import Privacy from "./pages/privacy/Privacy.jsx";

import Login from "./pages/login/Login.jsx"
import Signup from "./pages/signup/Signup.jsx"

import SectionContext from "./contexts/SectionContext.jsx";

// css
import "./App.css"
import { useState } from "react";



function App() {
  const [section, setSection] = useState("");


  return (
    <SectionContext.Provider value={{ section, setSection }}>
    <div  className="app" id="outer-container">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* admin authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* repoter */}
        <Route path="/reportForm" element={<ReportForm />} />
        <Route path="/userReport/:reportKey" element={<UserReport />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/privacy" element={<Privacy />} />

        {/* admin */}
        <Route path="/adminReport" element={<AdminReport />} />
        <Route path="/adminOverviewDashboard" element={<AdminOverviewDashboard />} />
        <Route path="/adminReportDashboard" element={<AdminReportDashboard />} />
        <Route path="/checkReport" element={<CheckReport />} />

      </Routes>
    </Router>
    </div>
    </SectionContext.Provider>
  );
}

export default App;
