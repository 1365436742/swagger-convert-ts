import request from '../index'
export function bodyListItemsUsingPUT({
  params,
  data,
}: {
  params?: IRequest.PutRequestBodyListItemsUsingPUTParams
  data?: IRequest.PutRequestBodyListItemsUsingPUTBody
} = {}) {
  return request<IRequest.PutRequestBodyListItemsUsingPUTResponses>({
    url: `/getRequest/getBody`,
    method: 'put',
    params: params || {},
    data: data || {},
  })
}
export function searchItemsUsingPUT({
  params,
}: { params?: IRequest.PutRequestSearchItemsUsingPUTParams } = {}) {
  return request<IRequest.PutRequestSearchItemsUsingPUTResponses>({
    url: `/getRequest/search`,
    method: 'put',
    params: params || {},
  })
}
export function getUserByIdUsingPUT(
  id: string,
  { params }: { params?: IRequest.PutRequestGetUserByIdUsingPUTParams } = {},
) {
  return request<IRequest.PutRequestGetUserByIdUsingPUTResponses>({
    url: `/getRequest/users/${id}`,
    method: 'put',
    params: params || {},
  })
}
export function getUserByIdsUsingPUT(
  id: string,
  spanceId: string,
  { params }: { params?: IRequest.PutRequestGetUserByIdsUsingPUTParams } = {},
) {
  return request<IRequest.PutRequestGetUserByIdsUsingPUTResponses>({
    url: `/getRequest/users/${id}/${spanceId}`,
    method: 'put',
    params: params || {},
  })
}
