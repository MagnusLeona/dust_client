import request from '../request';

const BASE_SERVER_URL = '/dust-server';

export const QueryMissionsForUser = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/mission/get`, params: { ...params }, method: 'GET' });
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

export const UpdateMissionForUser = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/mission/update`, params: { ...params }, method: "POST" })
}

export const ArchiveMissionForUser = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/mission/archive/${params.missionId}`, method: "POST" })
}

export const QueryArchivedMissionForUser = function (params) {
  return request({ url: `${BASE_SERVER_URL}/user/mission/get/archived`, method: "GET" })
}