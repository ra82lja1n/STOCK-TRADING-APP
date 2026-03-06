import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Backend API URL
  withCredentials: true, // allows cookies if backend uses authentication
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log("Request sent:", config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Optional: Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    console.log("Response received:", response);
    return response;
  },
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

// Export default instance
export default axiosInstance;