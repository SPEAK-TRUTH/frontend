import React from "react";
// import LOGO from "../../assets/images/speaktruth-high-resolution-logo-color-on-transparent-background.png";
import "./adminOverviewDashboard.css";

const AdminOverviewDashboard = () => {
  return (
    <>
      <div className="container">
        {/* Header */}
        <div className="topHeaderWrapper">
          {/* left */}
          <div className="header-left">
            {/* <img className="logo" src={LOGO} /> */}
          </div>

          {/* right */}
          <div className="header-right">
            <button className="btn create">Create a Report</button>
            <button className="btn logout">Logout</button>
          </div>
        </div>

        {/* Side-bar */}
        <div className="main-container">
          <div className="side-bar">
            <div className="bar-item">Overview</div>
            <div className="bar-item">Report</div>
          </div>

          {/* Main Contents */}
          <div className="main-wrapper">
            <div className="left">
              <div className="content">
                <div className="wrapper-gray">
                  <div className="inner-wrapper">
                    <h3 className="bold">Monthly Reports</h3>
                    {/* graph */}
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="content">
                <div className="wrapper-gray">
                  <div className="inner-wrapper">
                    <h3 className="bold">By department</h3>
                    <div className="item">
                      <p>Marketing</p>
                      <p>7</p>
                    </div>
                    <div className="item">
                      <p>Operation</p>
                      <p>6</p>
                    </div>
                    <div className="item">
                      <p>IT</p>
                      <p>4</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content">
                <div className="wrapper-gray">
                  <div className="inner-wrapper">
                    <h3 className="bold">By Category</h3>
                    <div className="item">
                      <p>Harassment</p>
                      <p>7</p>
                    </div>
                    <div className="item">
                      <p>Safety</p>
                      <p>6</p>
                    </div>
                    <div className="item">
                      <p>Theft</p>
                      <p>4</p>
                    </div>
                  </div>
                </div>
              </div>
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

export default AdminOverviewDashboard;
