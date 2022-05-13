import request from '../request';

const BASE_SERVER_URL = '/dust-server';

export const GetArticle = function (params) {
  return request({ url: `${BASE_SERVER_URL}/article/get`, params: { ...params }, method: "GET" });
};

export const GetArticleDetail = function (params) {
  return request({ url: `${BASE_SERVER_URL}/article/get/detail/${params}`, method: "GET" });
};