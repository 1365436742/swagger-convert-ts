import request from '../index'
export function bodyListItemsUsingDELETE({
  params,
  data,
}: {
  params?: IApi.DeleteRequestBodyListItemsUsingDELETEParams
  data?: IApi.DeleteRequestBodyListItemsUsingDELETEBody
} = {}) {
  return request<IApi.DeleteRequestBodyListItemsUsingDELETEResponses>({
    url: `/deleteRequest/getBody`,
    method: 'delete',
    params: params || {},
    data: data || {},
  })
}
export function searchItemsUsingDELETE({
  params,
}: { params?: IApi.DeleteRequestSearchItemsUsingDELETEParams } = {}) {
  return request<IApi.DeleteRequestSearchItemsUsingDELETEResponses>({
    url: `/deleteRequest/search`,
    method: 'delete',
    params: params || {},
  })
}
export function getUserByIdUsingDELETE(
  id: string,
  { params }: { params?: IApi.DeleteRequestGetUserByIdUsingDELETEParams } = {},
) {
  return request<IApi.DeleteRequestGetUserByIdUsingDELETEResponses>({
    url: `/deleteRequest/users/${id}`,
    method: 'delete',
    params: params || {},
  })
}
export function getUserByIdsUsingDELETE(
  id: string,
  spanceId: string,
  { params }: { params?: IApi.DeleteRequestGetUserByIdsUsingDELETEParams } = {},
) {
  return request<IApi.DeleteRequestGetUserByIdsUsingDELETEResponses>({
    url: `/deleteRequest/users/${id}/${spanceId}`,
    method: 'delete',
    params: params || {},
  })
}
