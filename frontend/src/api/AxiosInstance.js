import axios from "axios";

const axiosInstance = axios.create({
  timeout: 3000,
  baseURL: "http://localhost:4000/graphql",
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
