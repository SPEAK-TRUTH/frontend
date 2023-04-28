import React from "react";
import LOGO from "../../assets/topHeaderImages/speaktruthLogo.png";
import "./adminOverviewDashboard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Footer from "../footer/Footer";

const AdminOverviewDashboard = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const data = {
    labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    datasets: [
      {
        label: "",
        data: [13, 23, 32, 43, 23, 57, 64, 72, 88, 75, 93, 78],
        borderColor: "rgba(39, 162, 219, 0.3)",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const departmentArr = [
    { department: "Marketing", value: 7 },
    { department: "Operation", value: 4 },
    { department: "IT", value: 3 },
  ];

  const categoryArr = [
    { category: "Harassment", value: 7 },
    { category: "Safety", value: 3 },
    { category: "Theft", value: 5 },
  ];

  const department = departmentArr.map((item) => (
    <div key={item.department} className="item">
      <p>{item.department}</p>
      <p>{item.value}</p>
    </div>
  ));

  const category = categoryArr.map((item) => (
    <div key={item.category} className="item">
      <p>{item.category}</p>
      <p>{item.value}</p>
    </div>
  ));

  return (
    <>
      <div className="admin-overview-container">
        {/* Header */}
        <div className="topHeaderWrapper">
          {/* left */}
          <div className="header-left">
            <img className="logo" src={LOGO} />
          </div>

          {/* right */}
          <div className="header-right">
            <button className="btn overview">Overview</button>
            <button className="btn btn-report">Report</button>
          </div>
        </div>

        {/* Side-bar */}
        <div className="admin-overview-main-container">
          {/* <div className="side-bar">
            <div className="bar-item pointer">Overview</div>
            <div className="bar-item">Report</div>
          </div> */}

          {/* Main Contents */}
          <div className="main-wrapper">
            {/* Main Content - left */}
            <div className="left">
              <div className="content">
                <div className="wrapper-gray">
                  <div className="inner-wrapper">
                    <h3 className="bold">Monthly Reports</h3>
                    {/* graph */}
                    <Line
                      height={400}
                      width={550}
                      data={data}
                      options={options}
                      //   data={graphData}
                      //   id="chart-key"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - right */}
            <div className="right">
              <div className="content">
                <div className="wrapper-gray">
                  <div className="inner-wrapper">
                    <h3 className="bold">By department</h3>
                    {department}
                  </div>
                </div>
              </div>

              <div className="content">
                <div className="wrapper-gray">
                  <div className="inner-wrapper">
                    <h3 className="bold">By Category</h3>
                    {category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        {/* <div className="footer">
          <p className="footer-text">SPEAKTRUTH 2023. ALL RIGHTS RESERVED.</p>
        </div> */}
        <Footer />
      </div>
    </>
  );
};

export default AdminOverviewDashboard;
