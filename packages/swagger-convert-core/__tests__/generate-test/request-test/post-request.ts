import request from '../index'
export function bodyListItemsUsingPOST({
  params,
  data,
}: {
  params?: IApi.PostRequestBodyListItemsUsingPOSTParams
  data?: IApi.PostRequestBodyListItemsUsingPOSTBody
} = {}) {
  return request<IApi.PostRequestBodyListItemsUsingPOSTResponses>({
    url: `/getRequest/getBody`,
    method: 'post',
    params: params || {},
    data: data || {},
  })
}
export function searchItemsUsingPOST({
  params,
}: { params?: IApi.PostRequestSearchItemsUsingPOSTParams } = {}) {
  return request<IApi.PostRequestSearchItemsUsingPOSTResponses>({
    url: `/getRequest/search`,
    method: 'post',
    params: params || {},
  })
}
export function getUserByIdUsingPOST(
  id: string,
  { params }: { params?: IApi.PostRequestGetUserByIdUsingPOSTParams } = {},
) {
  return request<IApi.PostRequestGetUserByIdUsingPOSTResponses>({
    url: `/getRequest/users/${id}`,
    method: 'post',
    params: params || {},
  })
}
export function getUserByIdsUsingPOST(
  id: string,
  spanceId: string,
  { params }: { params?: IApi.PostRequestGetUserByIdsUsingPOSTParams } = {},
) {
  return request<IApi.PostRequestGetUserByIdsUsingPOSTResponses>({
    url: `/getRequest/users/${id}/${spanceId}`,
    method: 'post',
    params: params || {},
  })
}
