import axios from "axios";

const authFetch = axios.create({
  baseURL: "http://194.164.164.192:8090/api/v1",
});

export default authFetch;
