import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.URL_MENU,
    headers: {
      Accept: "application/json, */*",
      "Content-Type": "application/json, */*"
    },
    validateStatus: status => {
      return status >= 200 && status < 300;
    }
  });

  export default apiClient;