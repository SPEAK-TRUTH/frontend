import React from "react";
import TopHeader from "../topHeader/TopHeader";
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
    <div key={item.department} className="adminOverViewDashboard-item">
      <p>{item.department}</p>
      <p>{item.value}</p>
    </div>
  ));

  const category = categoryArr.map((item) => (
    <div key={item.category} className="adminOverViewDashboard-item">
      <p>{item.category}</p>
      <p>{item.value}</p>
    </div>
  ));

  return (
    <>
      <div className="adminOverViewDashboard">
        {/* Header */}
       <TopHeader />

        {/* Side-bar */}
        {/* <div className="adminOverViewDashboard-main-container">
          <div className="adminOverViewDashboard-main-wrapper">
            
            <div className="adminOverViewDashboard-left">
              <div className="adminOverViewDashboard-content">
                <div className="adminOverViewDashboard-wrapper-gray">
                  <div className="adminOverViewDashboard-inner-wrapper">
                    <h3 className="adminOverViewDashboard-bold">Monthly Reports</h3>
                    
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

            
            <div className="adminOverViewDashboard-right">
              <div className="adminOverViewDashboard-content">
                <div className="adminOverViewDashboard-wrapper-gray">
                  <div className="adminOverViewDashboard-inner-wrapper">
                    <h3 className="adminOverViewDashboard-bold">By department</h3>
                    {department}
                  </div>
                </div>
              </div>

              <div className="adminOverViewDashboard-content">
                <div className="adminOverViewDashboard-wrapper-gray">
                  <div className="adminOverViewDashboard-inner-wrapper">
                    <h3 className="adminOverViewDashboard-bold">By Category</h3>
                    {category}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> */}

        <div className="adminOverViewDashboard-main-container">
          {/* box1 */}
          <div className="adminOverViewDashboard-monthly-reports-wrapper">
            <h3>Monthly Reports</h3>
              <Line
                height={400}
                width={550}
                data={data}
                options={options}
                //   data={graphData}
                //   id="chart-key"
              />
          </div>

          {/* box2 */}
          <div className="adminOverViewDashboard-details">
            {/* box1 */}
            <div className="adminOverViewDashboard-details-department">
              <h3>By department</h3>
              {department}
            </div>

            {/* box2 */}
            <div className="adminOverViewDashboard-details-category">
              <h3>By category</h3>
              {category}
            </div>
          </div>
        </div>


        <div className="adminOverViewDashboard-footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AdminOverviewDashboard;
