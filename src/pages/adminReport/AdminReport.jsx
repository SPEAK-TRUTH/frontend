import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

// import axios from 'axios';
// import DOMPurify from 'dompurify';

import Footer from "../../components/footer/Footer"
import Chat from "../../components/chat/Chat";
import TopHeader from "../../components/topHeader/TopHeader";

// import "./adminReport.css"

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

const AdminReport = () => {
    const { reportKey } = useParams();
    const [report, setReport] = useState(null);

    // useEffect(() => {
    //     const getReport = async () => {
    //         const res = await axios.get(`http://localhost:5002/api/reports/get/${reportKey}`);
    //         setReport(res.data)
    //     };
    //     getReport();
    // }, [reportKey]);

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
    <div className='adminReport-adminReport'>
        <TopHeader />
            <div className="adminReport-report">
                <div className="adminReport-reportID">
                    <h2>Report ID: <span>Letmeseeyourreport123</span> </h2>
                </div>
                    <div className="adminReport-reportDetailsWrapper">
                        <hr />
                        <div className="adminReport-reportDetails">
                            {/* box1 */}
                            <div className="adminReport-reportDepartmentCategory">
                                {/* box1 */}
                                <div className="adminReport-reportSection">
                                    <h3 className="adminReport-reportSectionName">Department</h3>
                                    <span>Marketing</span>
                                </div>
                                {/* box2 */}
                                <div className="adminReport-reportSection">
                                    <h3 className="adminReport-reportSectionName">Category</h3>
                                    <span>Harassment</span>
                                </div>
                            </div>

                            {/* box2 */}
                            <div className="adminReport-reportDates">
                                {/* box1 */}
                                <div className="adminReport-reportSection">
                                    <h3 className="adminReport-reportSectionName">Submitted at </h3>
                                    <span>March 3, 2023 05:00 PM</span>
                                </div>
                                {/* box2 */}
                                <div className="adminReport-reportSection">
                                    <h3 className="adminReport-reportSectionName">Incident Date</h3>
                                    <span>March 3, 2023 05:00 PM</span>
                                </div>
                            </div>
                        </div>

                        <div className="adminReport-reportDescription">
                        {/* {
                            (() => {
                                const sanitizedContent = DOMPurify.sanitize(report.content);
                                return <p>{sanitizedContent}</p>;
                            })
                        } */}
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut justo gravida, facilisis nisl quis, luctus sem. Duis nec accumsan velit, gravida lobortis arcu. Suspendisse vel nibh pretium nunc iaculis tempus. Etiam egestas tempor diam, aliquet sodales turpis placerat vel. Vivamus scelerisque commodo scelerisque. Sed velit tortor, tempus id quam faucibus, pellentesque ornare est. Nulla ultrices pretium magna sit amet fringilla. Integer ante orci, vehicula non semper et, pulvinar eget elit. Sed cursus mattis mi.
                                Phasellus auctor nisi maximus, hendrerit nulla id, congue lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi felis felis, volutpat eu risus quis, facilisis congue metus. Maecenas at mauris mauris. In mattis tempus commodo. Curabitur dui lacus, laoreet id felis vitae, lobortis pellentesque mauris. Mauris purus neque, dapibus at vehicula faucibus, maximus at tellus. In vehicula tortor at diam maximus, at lobortis tellus interdum. Duis hendrerit lorem non felis faucibus dignissim. Donec eleifend feugiat convallis.
                            </p>
                        </div>

                        <div className="adminReport-reportAttachment">
                            <h3 className="adminReport-reportSectionName">Attachment</h3>
                            <ul className="adminReport-reportFileLists">
                                {/* {
                                    report.files.map((file, index) => (
                                    <li key={index} className="adminReport-flex items-center mb-2">
                                        {getIconForFileType(file.filename)}
                                        <a
                                            href={`http://localhost:5002/files/${file.filename}`}
                                            className="adminReport-text-blue-500 hover:underline"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {file.filename}
                                        </a>
                                    </li>
                                    ))
                                } */}
                                <li  className="adminReport-reportFileList">
                                    {/* {getIconForFileType(file.filename)} */}
                                    <img src={JpegIcon} alt="JPEG/PNG Icon" className="adminReport-extensionIcon" />
                                    <a
                                        // href={`http://localhost:5002/files/${file.filename}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        
                                        {/* {file.filename} */}
                                        <p>testFile.jpeg</p> 
                                    </a>
                                </li>

                                <li  className="adminReport-reportFileList">
                                    {/* {getIconForFileType(file.filename)} */}
                                    <img src={JpegIcon} alt="JPEG/PNG Icon" className="adminReport-extensionIcon" />
                                    <a
                                        // href={`http://localhost:5002/files/${file.filename}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        
                                        {/* {file.filename} */}
                                        <p>testFile.jpeg</p> 
                                    </a>
                                </li>

                                <li  className="adminReport-reportFileList">
                                    {/* {getIconForFileType(file.filename)} */}
                                    <img src={JpegIcon} alt="JPEG/PNG Icon" className="adminReport-extensionIcon" />
                                    <a
                                        // href={`http://localhost:5002/files/${file.filename}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        
                                        {/* {file.filename} */}
                                        <p>testFile.jpeg</p> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                

                <div className="adminReport-reportChatWrapper">
                    <hr />
                    <div className="adminReport-reportChatHeader">
                            <h2>Send Messages </h2>
                    </div>

                    <div className="adminReport-reportChat">
                        <Chat />
                    </div>
                </div>
            {/* </div> */}
        </div>
        
    <Footer />
    </div>
  )
}

export default AdminReport