import request from "../index";
export function bodyListItemsUsingPUT({
  params,
  data,
}: {
  params?: IApi.PutRequestBodyListItemsUsingPUTParams;
  data?: IApi.PutRequestBodyListItemsUsingPUTBody;
} = {}) {
  return request<IApi.PutRequestBodyListItemsUsingPUTResponses>({
    url: `/getRequest/getBody`,
    method: "put",
    params: params || {},
    data: data || {},
  });
}
export function searchItemsUsingPUT({
  params,
}: { params?: IApi.PutRequestSearchItemsUsingPUTParams } = {}) {
  return request<IApi.PutRequestSearchItemsUsingPUTResponses>({
    url: `/getRequest/search`,
    method: "put",
    params: params || {},
  });
}
export function getUserByIdUsingPUT(
  id: string,
  { params }: { params?: IApi.PutRequestGetUserByIdUsingPUTParams } = {},
) {
  return request<IApi.PutRequestGetUserByIdUsingPUTResponses>({
    url: `/getRequest/users/${id}`,
    method: "put",
    params: params || {},
  });
}
export function getUserByIdsUsingPUT(
  id: string,
  spanceId: string,
  { params }: { params?: IApi.PutRequestGetUserByIdsUsingPUTParams } = {},
) {
  return request<IApi.PutRequestGetUserByIdsUsingPUTResponses>({
    url: `/getRequest/users/${id}/${spanceId}`,
    method: "put",
    params: params || {},
  });
}
