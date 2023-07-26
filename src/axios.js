import axios from "axios";

const instance = axios.create({
  baseURL: "https://auth-mongo-back-production.up.railway.app",
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem("token");
  return config;
});

export default instance;
