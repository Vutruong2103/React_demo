import axios from "axios";

const instance = axios.create({
    //đường link backend
    baseURL: 'http://localhost:8081/'
});
// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    //nếu như response && response.data có thì trả ra response.data còn kh thì trả ra response
    return response && response.data ? response.data : response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response && error.response.data ? error.response.data : Promise.reject(error);
  });

//export default ra chỉ 1 biến và biến đấy có giá trị là instance
export default instance;