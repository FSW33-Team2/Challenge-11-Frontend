import Axios from "axios";

Axios.defaults.withCredentials = true;
const axios = Axios.create({
  baseURL: "http://localhost:8000",
});

export default axios;
