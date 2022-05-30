import request from '../request';

const BASE_SERVER_URL = '/dust-server';

export const GetArticle = function (params) {
  return request({ url: `${BASE_SERVER_URL}/article/get`, params: { ...params }, method: "GET" });
};

export const GetArticleDetail = function (params) {
  return request({ url: `${BASE_SERVER_URL}/article/get/detail/${params}`, method: "GET" });
};

export const UploadArticle = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/article/create`, params: { ...params }, method: "POST" })
}

export const QueryTags = function (params) {
  return request({ url: `${BASE_SERVER_URL}/tag/query/all`, method: "GET" })
}

export const QueryArticlesByType = function (params) {
  return request({ url: `${BASE_SERVER_URL}/article/get/list/${params}`, method: "GET" })
}

export const QueryArticlesByUser  = function(params) {
  return request({url: `${BASE_SERVER_URL}/user/article/get`, method: "GET"})
}

export const FancyArticle = function(params) {
  return request({url: `${BASE_SERVER_URL}/user/article/like/try/${params}`, method: "GET"})
}

export const CancelFancyArticle = function(params) {
  return request({url: `${BASE_SERVER_URL}/user/article/like/cancel/${params}`, method: "GET"});
}

export const MarkArticle = function(params) {
  return request({url: `${BASE_SERVER_URL}/user/article/mark/try/${params}`, method: "GET"})
}

export const CancelMarkArticle = function(params) {
  return request({url: `${BASE_SERVER_URL}/user/article/mark/cancel/${params}`, method: "GET"});
}