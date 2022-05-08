import request from '../request';

const BASE_SERVER_URL = '/dust-server';

export const Login = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/login`, params: { ...params }, method: "POST" });
};