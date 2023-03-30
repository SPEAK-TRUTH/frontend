import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LOGO from "../../assets/images/speaktruth-high-resolution-logo-color-on-transparent-background.png";
import "./checkReport.css";
import { IconContext } from "react-icons";
import { BsShieldFillExclamation } from "react-icons/bs";

const CheckReport = () => {
  //   const showSettings = (event) => event.preventDefault();

  //   const smallScreen = 576;
  //   const mediumScreen = 768;
  //   const largeScreen = 1200;

  //   const [windowSize, setWindowSize] = useState([window.innerWidth]);

  //   useEffect(() => {
  //     const handleWindowResize = () => setWindowSize([window.innerWidth]);
  //     window.addEventListener("resize", handleWindowResize);
  //     return () => window.removeEventListener("resize", handleWindowResize);
  //   });

  return (
    <>
      <div className="container">
        {/* Header */}
        <div className="topHeaderWrapper">
          {/* {windowSize < largeScreen ? (<Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />) : <></>} */}

          {/* left */}
          <div className="header-left">
            <img className="logo" src={LOGO} />
          </div>

          {/* <div className="topHeaderSpeakTruthLogoWrapper">
          {windowSize <= mediumScreen ? (
            <img className="topHeaderSpeakTruthLogo" src={LOGO} />
          ) : (
            <img className="topHeaderSpeakTruthFullLogo" src={LOGO} />
          )}
        </div> */}

          {/* right */}
          <div className="header-right">
            {/* <Link to="/">
            <button className="btn-check">Check a Report</button>
          </Link>
          <Link to="/">
            <button className="btn-create">Create a Report</button>
          </Link> */}
            <button className="btn create">Create a Report</button>
          </div>
        </div>

        {/* Main Contents */}
        <div className="main-container">
          <div className="wrapper">
            <div className="top-wrapper">
              <p className="headline">Check a Report</p>
              <p className="text">
                Check the report to see the status and to communicate
                anonymously with the person from your organization that is
                handling your report.
              </p>
            </div>
            <div className="report-form">
              <p className="form-head">Report key*</p>
              <input
                type="text"
                className="key"
                placeholder="letmereport1234"
              />
              <button className="btn check">Check</button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="footer">
          <p className="footer-text">SPEAKTRUTH 2023. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </>
  );
};

export default CheckReport;
