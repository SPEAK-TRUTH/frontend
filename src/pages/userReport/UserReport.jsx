import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import DOMPurify from 'dompurify';

import Footer from "../../components/footer/Footer"
import Chat from "../../components/chat/Chat";
import TopHeader from "../../components/topHeader/TopHeader";

import { axiosInstance } from "../../config";

import "./userReport.css"

// Import icons
import PdfIcon  from "../../assets/fileIcons/pdf-icon1.png";
import DocIcon from "../../assets/fileIcons/doc-icon1.png";
import XlsIcon from "../../assets/fileIcons/xlc-icon1.png";
import JpegIcon from "../../assets/fileIcons/jpeg-icon1.png";

const getIconForFileType = (filename) => {
    const extension = filename.split(".").pop().toLowerCase();
  
    switch (extension) {
      case "pdf":
        return <img src={PdfIcon} alt="PDF Icon" className="extensionIcon" />;
      case "doc":
      case "docx":
        return <img src={DocIcon} alt="DOC Icon" className="extensionIcon" />;
      case "xls":
      case "xlsx":
        return <img src={XlsIcon} alt="XLS Icon" className="extensionIcon" />;
      case "jpg":
      case "jpeg":
      case "png":
        return <img src={JpegIcon} alt="JPEG/PNG Icon" className="extensionIcon" />;
      default:
        return null;
    }
  };

const UserReport = () => {
    const { reportKey } = useParams();
    console.log("reportKey" + reportKey);
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const userRole = "reporter"; 

  useEffect(() => {
    const getReport = async () => {
      const res = await axiosInstance.get(`/reports/get/${reportKey}`);
      console.log(res.data);  // Log the whole response
      setReport(res.data);
      setLoading(false);
    };
    getReport();

  }, [reportKey]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours24 = date.getHours();
    const hours12 = (hours24 % 12) || 12;
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours24 < 12 ? 'AM' : 'PM';
    return `${year}-${month}-${day} ${hours12}:${minutes}${ampm}`;
  };


  return (
    <div className='userReport'>
        <TopHeader />
        <div className="userReport-report">
            <div className="userReport-reportID">
                <h3>{reportKey}</h3>
            </div>

            <div className="userReport-reportDetailsWrapper">
                <hr />
                <div className="userReport-reportDetails">
                    {/* box1 */}
                    <div className="userReport-reportDepartmentCategory">
                        {/* box1 */}
                        <div className="userReport-reportSection">
                            <h3 className="userReport-reportSectionName">Department</h3>
                            <span>{report.department}</span>
                        </div>
                        {/* box2 */}
                        <div className="userReport-reportSection">
                            <h3 className="userReport-reportSectionName">Category</h3>
                            {report.categories.map((category, index) => (
                                    <span key={index}>{category}</span>
                                ))}
                        </div>
                    </div>

                    {/* box2 */}
                    <div className="userReport-reportDates">
                         {/* box1 */}
                         <div className="userReport-reportSection">
                            <h3 className="userReport-reportSectionName">Submitted at </h3>
                            <span>{formatDate(report.createdAt)}</span>
                        </div>
                        {/* box2 */}
                        <div className="userReport-reportSection">
                            <h3 className="userReport-reportSectionName">Incident Date</h3>
                            <span>{formatDate(report.incidentDate)}</span>
                        </div>
                    </div>
                </div>

                <div className="userReport-reportDescription">
                        {report.content}
                </div>

                <div className="userReport-reportAttachment">
                    <h3 className="userReport-reportSectionName">Attachment</h3>
                    <ul className="userReport-reportFileLists">
                      {report.files.map((file, index) => (
                          <li key={index} className="userReport-reportFileList">
                              <img src={JpegIcon} alt="JPEG/PNG Icon" className="userReport-extensionIcon" />
                              <a
                                  href={`https://speaktruth-backend.herokuapp.com/${file.data}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                  <p>{file.filename}</p> 
                              </a>
                          </li>
                      ))}
                        {/* {report.files.map((file, index) => (
                          <li key={index} className="userReport-reportFileList">
                              <img src={JpegIcon} alt="JPEG/PNG Icon" className="userReport-extensionIcon" />
                              <img src={`https://speaktruth-backend.herokuapp.com/api/${file.data}`} alt="img" className="singlePostImg" />
                          </li>
                          
                      ))} */}
                    </ul>
                </div>
            </div>

            <div className="userReport-reportChatWrapper">
                <hr />
                <div className="userReport-reportChatHeader">
                        <h3>Send Messages </h3>
                </div>

                <div className="userReport-reportChat">
                {/* <Chat reportKey={reportKey} userRole={userRole} /> */}
                </div>
            </div>
        </div>
        <div className="userReport-footer">
         <Footer />
      </div>
    </div>
  )
}

export default UserReport