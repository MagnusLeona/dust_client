import request from '../request';

const BASE_SERVER_URL = '/dust-server';

export const QueryMissionsForUser = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/mission/get`, params: { ...params }, method: 'POST' });
};

export const SaveMissionForUser = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/mission/create`, params: { ...params }, method: "POST" })
}

export const DeleteMissionForUser = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/mission/delete/${params.missionId}`, params: { ...params }, method: "DELETE" })
}

export const FinishMissionForUser = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/mission/finish/for-all/${params.missionId}`, params: { ...params }, method: "POST" })
}