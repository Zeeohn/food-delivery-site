import axios from "axios";

const baseURL =
  process.env.PUBLIC_NEXT_API_ENDPOINT || "http://localhost:3000/api";

console.log(baseURL);
const api = axios.create({
  baseURL,
});

export default api;
