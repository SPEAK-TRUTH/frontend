import React from "react";
import LOGO from "../../assets/topHeaderImages/speaktruthLogo.png";
import "./adminReportDashboard.css";
import { useTable } from "react-table";
import { data, columns } from "./data/tableData";

const AdminReportDashboard = () => {
  const departmentArr = [
    { department: "Marketing", value: 7 },
    { department: "Operation", value: 4 },
    { department: "IT", value: 3 },
  ];

  const department = departmentArr.map((item) => (
    <div key={item.department} className="item">
      <p>{item.department}</p>
      <p>{item.value}</p>
    </div>
  ));

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <>
      <div className="container">
        {/* Header */}
        <div className="topHeaderWrapper">
          {/* left */}
          <div className="header-left">
            <img className="logo" src={LOGO} />
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
            <div className="bar-item pointer">Report</div>
          </div>

          {/* Main Contents */}
          <div className="main-wrapper">
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((columns) => (
                      <th {...columns.getHeaderProps()}>
                        {columns.render("header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>

              <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
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

export default AdminReportDashboard;
