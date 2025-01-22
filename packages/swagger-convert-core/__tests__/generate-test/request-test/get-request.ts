import request from '../index'
export function bodyListItemsUsingGET({
  params,
  data,
}: {
  params?: IApi.GetRequestBodyListItemsUsingGETParams
  data?: IApi.GetRequestBodyListItemsUsingGETBody
} = {}) {
  return request<IApi.GetRequestBodyListItemsUsingGETResponses>({
    url: `/getRequest/getBody`,
    method: 'get',
    params: params || {},
    data: data || {},
  })
}
export function searchItemsUsingGET({
  params,
}: { params?: IApi.GetRequestSearchItemsUsingGETParams } = {}) {
  return request<IApi.GetRequestSearchItemsUsingGETResponses>({
    url: `/getRequest/search`,
    method: 'get',
    params: params || {},
  })
}
export function getUserByIdUsingGET(
  id: string,
  { params }: { params?: IApi.GetRequestGetUserByIdUsingGETParams } = {},
) {
  return request<IApi.GetRequestGetUserByIdUsingGETResponses>({
    url: `/getRequest/users/${id}`,
    method: 'get',
    params: params || {},
  })
}
export function getUserByIdsUsingGET(
  id: string,
  spanceId: string,
  { params }: { params?: IApi.GetRequestGetUserByIdsUsingGETParams } = {},
) {
  return request<IApi.GetRequestGetUserByIdsUsingGETResponses>({
    url: `/getRequest/users/${id}/${spanceId}`,
    method: 'get',
    params: params || {},
  })
}
