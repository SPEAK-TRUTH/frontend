import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LOGO from "../../assets/images/speaktruth-high-resolution-logo-color-on-transparent-background.png";
import "./checkReport.css";
import TopHeader from "../topHeader/TopHeader"
import Footer from "../footer/Footer"

const CheckReport = () => {
  const [reportKey, setReportKey] = useState("");
  const navigate = useNavigate();


  const handleChange = useCallback((e) => {
    setReportKey(e.target.value);
  }, []);

  const handleCheckReport = useCallback(() => {
    // Fetch and display the report data using the entered report key
    console.log("Checking report with key:", reportKey);
    navigate(`/userReport/${reportKey}`);
  }, [reportKey]);

  return (
    <>
      <div className="checkReport">
        <TopHeader />
  
        <div className="checkReport-main-container">
          <div className="checkReport-wrapper">
            <div className="checkReport-top-wrapper">
              <p className="checkReport-headline">Check a Report</p>
              <p className="checkReport-text">
                Check the report to see the status and to communicate anonymously
                with the person from your organization that is handling your
                report.
              </p>
            </div>
            <div className="checkReport-report-form">
              <p className="checkReport-form-headline">Report Key*</p>
              <input
                type="text"
                value={reportKey}
                onChange={handleChange}
                className="checkReport-input-key"
              />
              <div className="checkReport-button-wrapper">
                <button className="checkReport-btn checkReport-btn-check" onClick={handleCheckReport}>
                  Check
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className="check-report-footer">
      <Footer />
      </div>
      
    </>
  );
  
};

export default CheckReport;
