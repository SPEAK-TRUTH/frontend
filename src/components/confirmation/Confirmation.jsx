import React, { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./confirmation.css";
import { BsShieldFillExclamation } from "react-icons/bs";
import Footer from "../footer/Footer";
import TopHeader from "../topHeader/TopHeader";

const Confirmation = () => {
  const location = useLocation();
  // const reportKey = location.state?.reportKey;
  const reportKey = "tandom report key";
  const [copyButtonText, setCopyButtonText] = useState("Copy");
  const navigate = useNavigate();

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(reportKey).then(
      () => {
        // Update the copy button text on success
        setCopyButtonText("Copied!");
        setTimeout(() => setCopyButtonText("Copy"), 2000);
      },
      () => {
        // Update the copy button text on error
        setCopyButtonText("Failed to copy");
        setTimeout(() => setCopyButtonText("Copy"), 2000);
      }
    );
  }, [reportKey]);

  const goToCheckReport = () => {
    navigate("/checkReport");
  };

  if (!reportKey) {
    return <div>No report key found.</div>;
  }

  return (
    <>
      <div className="confirmation-container">
        <TopHeader />
        <div className="confirmation-main-container">
          <div className="confirmation-wrapper">
            <div className="confirmation-top-wrapper">
              <p className="confirmation-headline">Thank you for your help!</p>
              <p className="confirmation-message">
                We received the report in order.
              </p>
              <p className="confirmation-message">
                We will investigate it as soon as possible and respond to you.
              </p>
            </div>
            <div className="confirmation-blue-container">
              <BsShieldFillExclamation className="confirmation-icon" />
              <p className="confirmation-message">
                Download or copy and safely store this key. Without it, you
                won't be able to check the report and communicate further with
                your organization.
              </p>
              <div className="confirmation-white-box">{reportKey}</div>
              <div className="confirmation-button-wrapper">
                <button className="confirmation-copy-button" onClick={handleCopy}>
                  {copyButtonText}
                </button>
                <button className="confirmation-check-report-button" onClick={goToCheckReport}>
                  Check Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Confirmation;
