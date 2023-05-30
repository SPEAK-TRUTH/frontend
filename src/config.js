import axios from "axios";

// Axios instance for requests with file uploads
export const axiosInstanceWithUploads = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  
  // Axios instance for other requests
  export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });