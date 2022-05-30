import request from '../request';

const BASE_SERVER_URL = '/dust-server';

export const Login = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/login`, params: { ...params }, method: "POST" });
};

export const Register = function(params) {
  return request({ url: `${BASE_SERVER_URL}/user/register`, params: { ...params }, method: "POST" });
}

export const CheckName = function(params) {
  return request({ url: `${BASE_SERVER_URL}/user/check-name`, params: { ...params }, method: "POST" });
}

export const CheckLoginStatus = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/check-login-status`, params: { ...params }, method: "POST" });
}

export const QueryCurrentUser = function(params) {
  return request({url: `${BASE_SERVER_URL}/user/get`, method: "GET"})
}