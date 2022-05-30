import axios from 'axios';
import router from '../router/index'
import { toRefs, unref } from "vue"

const resolveResponse = function (response) {
  let { data, status } = response;

  if (status !== 200) {
    throw new Error('网络异常！');
  }

  const { code, msg, body } = data;
  // code 为000表示交易执行成功，直接取返回数据即可

  if (code === 200) {
    return body;
  } else {
    //自定义抛错
    let e = {
      msg: msg,
      code: code
    };
    throw e;
  }
};

export default function request({ url, params, method }) {
  if (method) {
    switch (method) {
      case 'POST':
        return axios.post(url, {
          ...params
        }).then(response => resolveResponse(response))["catch"]((e) => {
          throw e;
        });;
      case "DELETE":
        return axios.delete(url, {
          ...params
        }).then(response => resolveResponse(response))["catch"]((e) => {
          throw e;
        });
      case "GET":
        return axios.get(url).then(response => resolveResponse(response))["catch"]((e) => {
          throw e;
        });
    }
  } else {
    return axios.post(url, {
      ...params
    })
      .then(response => resolveResponse(response))["catch"]((e) => {
        throw e;
      });
  }
};
