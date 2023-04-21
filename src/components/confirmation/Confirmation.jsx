import React from "react";
import "./confirmation.css";
// import { BsShieldFillExclamation } from "react-icons/bs";
// import LOGO from "../../assets/images/speaktruth-high-resolution-logo-color-on-transparent-background.png";
// import { useState, useEffect } from "react";

const Confirmation = () => {
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
            {/* <img className="logo" src={LOGO} /> */}
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
            <button className="btn check">Check a Report</button>
            <button className="btn create">Create a Report</button>
          </div>
        </div>

        {/* Main Contents */} 
        <div className="main-container">
          <div className="wrapper">
            <div className="top-wrapper">
              <p className="headline">Thank you for your help!</p>
              <p className="text">
                We received the report in order. We will investigate it as soon
                as possible and respond to you.
              </p>
            </div>
            <div className="blue-container">
              {/* logo */}
                {/* <BsShieldFillExclamation className="icon" /> */}
              <p className="text inner-text">
                Download or copy and safely store this key. Without it, you
                won't be able to check the report and communicate further with
                your organization
              </p>
              <div className="white-box">
                <p className="key">letmereport1234</p>
              </div>
              <button className="btn-copy">Copy</button>
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

export default Confirmation;
