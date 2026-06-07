import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: true, // MANDATORY: Automatically handles cookies for all requests
});

export default api;
