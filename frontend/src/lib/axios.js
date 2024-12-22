import axios from "axios";

const axionsInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default axionsInstance;
