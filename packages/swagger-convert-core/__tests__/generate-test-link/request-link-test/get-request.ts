import request from "../index";
export function bodyListItemsUsingGET({
  params,
  data,
}: {
  params?: IRequest.GetRequestBodyListItemsUsingGETParams;
  data?: IRequest.GetRequestBodyListItemsUsingGETBody;
} = {}) {
  return request<IRequest.GetRequestBodyListItemsUsingGETResponses>({
    url: `/getRequest/getBody`,
    method: "get",
    params: params || {},
    data: data || {},
  });
}
export function searchItemsUsingGET({
  params,
}: { params?: IRequest.GetRequestSearchItemsUsingGETParams } = {}) {
  return request<IRequest.GetRequestSearchItemsUsingGETResponses>({
    url: `/getRequest/search`,
    method: "get",
    params: params || {},
  });
}
export function getUserByIdUsingGET(
  id: string,
  { params }: { params?: IRequest.GetRequestGetUserByIdUsingGETParams } = {},
) {
  return request<IRequest.GetRequestGetUserByIdUsingGETResponses>({
    url: `/getRequest/users/${id}`,
    method: "get",
    params: params || {},
  });
}
export function getUserByIdsUsingGET(
  id: string,
  spanceId: string,
  { params }: { params?: IRequest.GetRequestGetUserByIdsUsingGETParams } = {},
) {
  return request<IRequest.GetRequestGetUserByIdsUsingGETResponses>({
    url: `/getRequest/users/${id}/${spanceId}`,
    method: "get",
    params: params || {},
  });
}
