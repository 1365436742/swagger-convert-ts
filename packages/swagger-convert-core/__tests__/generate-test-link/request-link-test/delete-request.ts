import request from '../index'
export function bodyListItemsUsingDELETE({
  params,
  data,
}: {
  params?: IRequest.DeleteRequestBodyListItemsUsingDELETEParams
  data?: IRequest.DeleteRequestBodyListItemsUsingDELETEBody
} = {}) {
  return request<IRequest.DeleteRequestBodyListItemsUsingDELETEResponses>({
    url: `/deleteRequest/getBody`,
    method: 'delete',
    params: params || {},
    data: data || {},
  })
}
export function searchItemsUsingDELETE({
  params,
}: { params?: IRequest.DeleteRequestSearchItemsUsingDELETEParams } = {}) {
  return request<IRequest.DeleteRequestSearchItemsUsingDELETEResponses>({
    url: `/deleteRequest/search`,
    method: 'delete',
    params: params || {},
  })
}
export function getUserByIdUsingDELETE(
  id: string,
  {
    params,
  }: { params?: IRequest.DeleteRequestGetUserByIdUsingDELETEParams } = {},
) {
  return request<IRequest.DeleteRequestGetUserByIdUsingDELETEResponses>({
    url: `/deleteRequest/users/${id}`,
    method: 'delete',
    params: params || {},
  })
}
export function getUserByIdsUsingDELETE(
  id: string,
  spanceId: string,
  {
    params,
  }: { params?: IRequest.DeleteRequestGetUserByIdsUsingDELETEParams } = {},
) {
  return request<IRequest.DeleteRequestGetUserByIdsUsingDELETEResponses>({
    url: `/deleteRequest/users/${id}/${spanceId}`,
    method: 'delete',
    params: params || {},
  })
}
