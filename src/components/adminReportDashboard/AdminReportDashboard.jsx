import React, { useState, useEffect, useRef, useMemo } from 'react';
import TopHeader from "../topHeader/TopHeader";
import "./adminReportDashboard.css";
import Footer from "../footer/Footer";
import SortIcon from "../../assets/adminReportDashboard/sort-solid.svg"
import ArrowIcon from "../../assets/adminReportDashboard/angle-down-solid.svg"
import data from "./data.json"




const AdminReportDashboard = () => {
  const [sortConfig, setSortConfig] = useState({ key: 'reportedDate', direction: 'ascending' });
  const [selection, setSelection] = useState('Reported Date');
  const [selectedColumn, setSelectedColumn] = useState('reportedDate');
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef(); // reference to the dropdown DOM element
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleSort = () => {
    setSortConfig(prevConfig => {
      if (prevConfig.key === "ID" || prevConfig.key === selectedColumn) {
        return { 
          key: prevConfig.key, 
          direction: prevConfig.direction === 'ascending' ? 'descending' : 'ascending' 
        };
      }
      return prevConfig;
    });
  };
  

  const handleChange = (e) => {
    const selectedKey = e.target.value === 'ID' ? e.target.value : e.target.value.toLowerCase();
    setSelection(e.target.value);
    setSelectedColumn(selectedKey === 'ReportedDate' ? 'ReportedDate' : selectedKey);
  
    // Set the sort configuration every time a new column is selected
    setSortConfig({
      key: selectedKey,
      direction: 'ascending',
    });
  
    setMenuOpen(false);
  };
  
  const sortedData = useMemo(() => {
    let sortableData = [...data];
    sortableData.sort((a, b) => {
      const keyA = a[sortConfig.key], keyB = b[sortConfig.key];
    
      if (keyA === undefined || keyB === undefined) {
        return 0;
      }
  
      if (sortConfig.key === 'ReportedDate') {
        const dateA = new Date(keyA);
        const dateB = new Date(keyB);
        return sortConfig.direction === 'ascending' ? dateA - dateB : dateB - dateA;
      } else if (typeof keyA === "number") {
        // Numeric sorting
        return sortConfig.direction === 'ascending'
          ? keyA - keyB
          : keyB - keyA;
      } else {
        // Alphanumeric sorting
        return sortConfig.direction === 'ascending'
          ? keyA.localeCompare(keyB)
          : keyB.localeCompare(keyA);
      }
    });
    return sortableData;
  }, [data, sortConfig]);
  
  const truncateDescription = (description) => {
    const words = description.trim().split(' ');
    if (words.length > 4) {
      return words.slice(0, 4).join(' ') + '...';
    }
    return description;
  };

  // Pagination Logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  console.log("indexOfLastItem:" + indexOfLastItem);
  console.log("indexOfFirstItem:" + indexOfFirstItem);
  console.log("currentItems:" + currentItems);
  console.log("totalPages:" + totalPages);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const options = [
    'ID',
    'Department',
    'Category',
    'Subject',
    'Description',
    'Reported Date',
    'Assignee',
  ];

  return (
    <>
      <div className="adminReportDashboard">
        <TopHeader />

        <div className="adminReportDashboard-main-container">
          <div className="adminReportDashboard-main-wrapper-table">
              <div className="dropdown" ref={dropdownRef}>
                <button
                  id="dropdownRadioButton"
                  type="button"
                  className="dropdownButton"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {selection}
                  <img src={ArrowIcon} alt="" className="dropdownButtonImage" />
                </button>
                {menuOpen && (
                  <div
                    id="dropdownRadio"
                    className="dropdownMenu"
                  >
                    <ul aria-labelledby="dropdownRadioButton">
                      {options.map((option, index) => (
                        <li key={index}>
                          <div
                            className="dropdownItem"
                          >
                            <input
                              id={`filter-radio-example-${index}`}
                              type="radio"
                              value={option}
                              name="filter-radio"
                              className="dropdownInput"
                              onChange={handleChange}
                              checked={selection === option}
                            />
                            <label
                              htmlFor={`filter-radio-example-${index}`}
                              className="dropdownLabel"
                            >
                              {option}
                            </label>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <img src={SortIcon} onClick={toggleSort} className="sortImage" />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Department</th>
                    <th>Category</th>
                    <th>Subject</th>
                    <th>Description</th>
                    <th>ReportedDate</th>
                    <th>Assignee</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={item.ID}>
                      <td>{item.ID}</td>
                      <td>{item.department}</td>
                      <td>{item.category}</td>
                      <td>{item.subject}</td>
                      <td>{truncateDescription(item.description)}</td>
                      <td>{new Date(item.reportedDate).toISOString().split('T')[0]}</td>
                      <td>{item.assignee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pagination">
                {Array.from({ length: totalPages }, (_, index) => (
                  <a
                    key={index}
                    onClick={() => paginate(index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                  >
                    {index + 1}
                  </a>
                ))}
              </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AdminReportDashboard;
