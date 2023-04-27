import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import TopHeader from "../../components/topHeader/TopHeader";
import Footer from "../../components/footer/Footer";
import "./reportForm.css"

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
      navigate("/ConfirmPage", { state: { reportKey } });
    }
  }, [reportKey, navigate]);

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

      console.log('uploadFormData:', uploadFormData);

      console.log("Uploading files...");
      // const uploadResponse = await axiosInstance.post("/api/upload", uploadFormData, {
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      // });
      const uploadResponse = await axios.post("http://localhost:5002/api/upload", uploadFormData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Upload response data:", uploadResponse.data);
      console.log("Upload response:", uploadResponse);

      // Create report
      const uploadedFileNames = uploadResponse.data.fileNames;
      console.log("Uploaded file names from server:", uploadedFileNames);
      const reportToSubmit = {
        ...reportData,
        files: uploadedFileNames,
      };

      // const reportResponse = await axiosInstance.post("/api/reports/create", reportToSubmit);
      console.log("Sending data to the server:", reportToSubmit);
      const reportResponse = await axios.post("http://localhost:5002/api/reports/create", reportToSubmit);
      console.log("Report submission response:", reportResponse);
      console.log("Report key:", reportResponse.data.report.reportKey);

      // setReportKey(reportResponse.data.report.reportKey);
      // navigate("/ConfirmPage", { state: { reportKey } });

      setReportKey(reportResponse.data.report.reportKey);

      alert("Report submitted successfully.");
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
        console.log("Error status code:", error.response.status);
        console.log("Error message:", error.response.data.error);
      } else {
        console.log("No response received from the server.");
      }
      alert("Error submitting report.");
    }
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
                required
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
                required
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
                required
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
                required
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
                required
                rows="6"
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
                  <p>Click anywhere dropzone to select files</p>
                  <p>or</p>
                  <p>Drag and drop files here.</p>
                  <p>Upload up to 5 images or documents (maximum 25mb each)</p>
                </div>
                
              </div>
            </div>
            <ul>
              {reportData.files.map((file, index) => (
                <li key={index}>
                  {file.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="reportFormLinkWrapper">
            <Link to='/reportForm' className="reportForm_link">
                <span className='reportFormlink'>Submit</span>
            </Link>

            <Link to='/' className="reportForm_link">
                <span className='reportFormlink'>Back</span>
            </Link>

            <p>
              By submitting your information to SPEAKTRUTH, you agree to the Terms of Service and Privacy Policy.
            </p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
  
}


export default ReportForm;