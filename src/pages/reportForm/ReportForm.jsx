import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// Import components
import TopHeader from "../../components/topHeader/TopHeader";
import Footer from "../../components/footer/Footer";

// Import assets
import Cloud from "../../assets/reportForm/cloud.svg"
import PdfIcon  from "../../assets/fileIcons/pdf-icon1.png";
import DocIcon from "../../assets/fileIcons/doc-icon1.png";
import XlsIcon from "../../assets/fileIcons/xlc-icon1.png";
import JpegIcon from "../../assets/fileIcons/jpeg-icon1.png";
import RemoveIcon from "../../assets/reportForm/remove-icon.svg"

// Import axios config
import { axiosInstance, axiosInstanceWithUploads } from "../../config";

// Import styles
import "./reportForm.css"

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

const ReportForm = () => {
  const [reportData, setReportData] = useState({
    subject: "",
    incidentDate: "",
    department: "",
    categories: [],
    content: "",
    files: [],
  });

  const [reportKey, setReportKey] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (reportKey) {
      navigate("/confirmation", { state: { reportKey } });
    }
  }, [reportKey, navigate]);

  useEffect(() => {
    // console.log('reportData.files changed:', reportData.files);
  }, [reportData.files]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReportData({ ...reportData, [name]: value });
  };

  const handleCategoriesChange = (e) => {
    const categories = e.target.value.split(",").map((cat) => cat.trim());
    setReportData({ ...reportData, categories });
  };

  const handleFileChange = (event) => {
    const files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    if (files.length > 5) {
      alert("You can only upload up to 5 files.");
      return;
    }

    for (const file of files) {
      if (file.size > 25 * 1024 * 1024) {
        alert("Each file must not exceed 25mb.");
        return;
      }
    }
    setReportData({ ...reportData, files: [...files] });
  };

  const preventDefault = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleFileChange(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload files
      const uploadFormData = new FormData();
      reportData.files.forEach((file, index) => {
        // const filename = Date.now() + file.name;
        // uploadFormData.append(`files[${index}]`, file, filename);
        // uploadFormData.append(`files[${index}]`, file, file.name);
        uploadFormData.append('files', file, file.name);

      });

      // console.log('uploadFormData:', uploadFormData);

      // console.log("Uploading files...");
      
      const uploadResponse = await axiosInstanceWithUploads.post("/upload", uploadFormData);
     
      // console.log("Upload response data:", uploadResponse.data);
      // console.log("Upload response:", uploadResponse);

      // Create report
      const uploadedFileNames = uploadResponse.data.fileNames;
      // console.log("Uploaded file names from server:", uploadedFileNames);
      const reportToSubmit = {
        ...reportData,
        files: uploadedFileNames,
      };

      const reportResponse = await axiosInstance.post("/reports/create", reportToSubmit);

      // console.log("Sending data to the server:", reportToSubmit);
      // console.log("Report submission response:", reportResponse);
      // console.log("Report key:", reportResponse.data.report.reportKey);

      // navigate("/confirmation", { state: { reportKey } });

      setReportKey(reportResponse.data.report.reportKey);

      // alert("Report submitted successfully.");
      setReportData({
        subject: "",
        incidentDate: "",
        department: "",
        categories: [],
        content: "",
        files: [],
      });
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        // console.log("Error status code:", error.response.status);
        // console.log("Error message:", error.response.data.error);
      } else {
        // console.log("No response received from the server.");
      }
      alert("Error submitting report.");
    }
  };

  const handleDeleteFile = (index) => {
    const newFilesArray = [...reportData.files];
    newFilesArray.splice(index, 1);
    setReportData({ ...reportData, files: newFilesArray });
  };
  

  return (
    <>
      <div className="reportForm">
        <TopHeader />
        <form onSubmit={handleSubmit} className="form">
          <h1 className="reportFormHeader">
            What kind of feedback would you like to provide for your company?
          </h1>


          <div className="formSubjectWrapper">
            <div className="formSubject">
              <label htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={reportData.subject}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>


    
          <div className="formIncidentDateWrapper">
            <div className="formIncidentDate">
              <label htmlFor="incidentDate">
                Incident Date
              </label>
              <input
                type="datetime-local"
                name="incidentDate"
                id="incidentDate"
                value={reportData.incidentDate}
                onChange={handleChange}
                required={true}
              />
            </div>
          </div>

    
          <div className="formDepartmentWrapper">
            <div className="formDepartment">
              <label htmlFor="department">
                Department
              </label>
              <input
                type="text"
                name="department"
                id="department"
                value={reportData.department}
                onChange={handleChange}
                required={true}
              />
              </div>
          </div>
    
          <div className="formCategoriesWrapper">
            <div className="formCategories">
              <label htmlFor="categories">
                Categories (comma-separated)
              </label>
              <input
                type="text"
                name="categories"
                id="categories"
                value={reportData.categories.join(", ")}
                onChange={handleCategoriesChange}
                required={true}
              />
            </div>
          </div>
    
          <div className="formContentWrapper">
            <div className="formContent">
              <label htmlFor="content">
                Content
              </label>
              <textarea
                name="content"
                id="content"
                value={reportData.content}
                onChange={handleChange}
                required={true}
                rows="6"
                style={{ resize: "vertical" }}
              />
              </div>
          </div>
    
          <div className="formAttachmentWrapper">
            <div className="formAttachment">
              <label htmlFor="files">
                Attachment
              </label>
              <div
                className="drag-drop-zone"
                onDragOver={preventDefault}
                onDragEnter={preventDefault}
                onDragLeave={preventDefault}
                onDrop={handleDrop}
                onClick={() => document.getElementById("files").click()}
              >
                <input
                  type="file"
                  name="files"
                  id="files"
                  onChange={handleFileChange}
                  multiple
                  style={{ display: "none" }}
                />
                <div className="dropzoneIndication">
                  <img src={Cloud} alt="" />
                  <p>Click anywhere dropzone to select files</p>
                  <p>or</p>
                  <p>Drag and drop files here.</p>
                  <p>Upload up to 5 images or documents (maximum 25mb each)</p>
                </div>
                
              </div>
            </div>

            <div className="reportForm-file-lists-wrapper">
              {reportData.files.map((file, index) => (
                  <div className="toast-undo" role="alert" key={index}>
                    <ul>
                      
                      <li  className="reportData-list-icon-file-name">
                        {getIconForFileType(file.name)}
                        {file.name}
                      </li>
                      <div className="reportData-actions">
                        <button 
                          onClick={() => handleDeleteFile(index)} 
                          type="button" 
                          className="reportForm-removeIcon" 
                          aria-label="Delete">
                          <img src={RemoveIcon} alt="" />
                        </button>
                      </div>
                      </ul>
                  </div>
                ))}
            </div>
          </div>

          <div className="reportFormLinkWrapper">
            
             
                {/* <Link to='/reportForm' className="reportForm_link">
                    <button type="submit" className='reportForm_link-submit-button'>Submit</button>
                </Link> */}
               
                <button type="submit" className="reportForm_link">Submit</button>

              <Link to='/' className="reportForm_link">
                  Back
              </Link>

            <p>
              By submitting your information to SPEAKTRUTH, you agree to the Terms of Service and <Link to='/privacy' className="reportForm-link-to-privacy">
                Privacy Policy
              </Link>.
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
  
}
export default ReportForm;