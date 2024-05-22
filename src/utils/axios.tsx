import axios from "axios";

const authFetch = axios.create({
  baseURL: 'http://194.164.164.192:8090/api/v1',
});

authFetch.interceptors.request.use((req) => {
  console.log("request");
  return req;
});

authFetch.interceptors.response.use((res) => {
  console.log("response");
  return res;
});

export default authFetch;
