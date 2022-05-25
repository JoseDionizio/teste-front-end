import axios from "axios";
import {URL_BASE} from './url'
const apiClient = axios.create({
    baseURL: URL_BASE,
    headers: {
      Accept: "application/json, */*",
      "Content-Type": "application/json, */*"
    },
    validateStatus: status => {
      return status >= 200 && status < 300;
    }
  });

  export default apiClient;