import axios from "@/utils/axios";


const localHost1 = 'http://localhost:9000'
const mainHost = 'https://node.hpvideo.io'


export const getList = data => {
  return axios({
    method: "post",
    url: mainHost + "/api/getUser/getList",
    data: data
  });
};

 export const getBlogInfo = data => {
  return axios({
    method: "post",
    url: mainHost + "/api/getUser/getBlogInfo",
    data: data
  });
};

export const getCategories = () => {
  return axios({
    method: "get",
    url: mainHost + "/api/getUser/getCategories",
  });
};
