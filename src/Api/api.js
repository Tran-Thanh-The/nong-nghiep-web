import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://641c87781a68dc9e460bedf3.mockapi.io",
  timeout: 25000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

axiosInstance.interceptors.request.use((request) => {
  const accessToken = "";
  const accessHeader = `Bearer ${accessToken}`;
  if (request.headers) { 
    request.headers["Authorization"] = accessHeader;
  }
  return request;
});
export default axiosInstance;
