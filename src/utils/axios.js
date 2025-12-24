import axios from 'axios'
// import Cookies from "js-cookie";

const instance = axios.create()
instance.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
  // console.log(error.message);
})

instance.interceptors.response.use(res => {
  return res.data
}, error => {
  if (error.response && error.response.status === 503) {
    return Promise.reject({
      success: false,
      code: -1,
      message: 'request timeout'
    });
  }
  if (error.response && error.response.status === 413) {
    return Promise.reject({
      success: false,
      code: -1,
      message: 'The image upload size exceeds the limit, please reduce the image size'
    })
    
  }
  if (error.response && error.response.status === 502) {
    return Promise.reject({
      success: false,
      code: -1,
      message: 'Network Error - Bad Gateway'
    })
  }
  return Promise.reject({
    success: false,
    code: -1,
    message: error.message
  })
  // return Promise.reject(error);
})

export default instance
