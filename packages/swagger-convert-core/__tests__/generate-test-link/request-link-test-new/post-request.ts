import request from '../index'
export function bodyListItemsUsingPOST({
  params,
  data,
}: {
  params?: IRequest.PostRequestBodyListItemsUsingPOSTParams
  data?: IRequest.PostRequestBodyListItemsUsingPOSTBody
} = {}) {
  return request<IRequest.PostRequestBodyListItemsUsingPOSTResponses>({
    url: `/getRequest/getBody`,
    method: 'post',
    params: params || {},
    data: data || {},
  })
}
export function searchItemsUsingPOST({
  params,
}: { params?: IRequest.PostRequestSearchItemsUsingPOSTParams } = {}) {
  return request<IRequest.PostRequestSearchItemsUsingPOSTResponses>({
    url: `/getRequest/search`,
    method: 'post',
    params: params || {},
  })
}
export function getUserByIdUsingPOST(
  id: string,
  { params }: { params?: IRequest.PostRequestGetUserByIdUsingPOSTParams } = {},
) {
  return request<IRequest.PostRequestGetUserByIdUsingPOSTResponses>({
    url: `/getRequest/users/${id}`,
    method: 'post',
    params: params || {},
  })
}
export function getUserByIdsUsingPOST(
  id: string,
  spanceId: string,
  { params }: { params?: IRequest.PostRequestGetUserByIdsUsingPOSTParams } = {},
) {
  return request<IRequest.PostRequestGetUserByIdsUsingPOSTResponses>({
    url: `/getRequest/users/${id}/${spanceId}`,
    method: 'post',
    params: params || {},
  })
}
