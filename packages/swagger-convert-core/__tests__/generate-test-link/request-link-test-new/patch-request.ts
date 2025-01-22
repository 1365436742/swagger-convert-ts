import request from '../index'
export function bodyListItemsUsingPATCH({
  params,
  data,
}: {
  params?: IRequest.PatchRequestBodyListItemsUsingPATCHParams
  data?: IRequest.PatchRequestBodyListItemsUsingPATCHBody
} = {}) {
  return request<IRequest.PatchRequestBodyListItemsUsingPATCHResponses>({
    url: `/getRequest/getBody`,
    method: 'patch',
    params: params || {},
    data: data || {},
  })
}
export function searchItemsUsingPATCH({
  params,
}: { params?: IRequest.PatchRequestSearchItemsUsingPATCHParams } = {}) {
  return request<IRequest.PatchRequestSearchItemsUsingPATCHResponses>({
    url: `/getRequest/search`,
    method: 'patch',
    params: params || {},
  })
}
export function getUserByIdUsingPATCH(
  id: string,
  {
    params,
  }: { params?: IRequest.PatchRequestGetUserByIdUsingPATCHParams } = {},
) {
  return request<IRequest.PatchRequestGetUserByIdUsingPATCHResponses>({
    url: `/getRequest/users/${id}`,
    method: 'patch',
    params: params || {},
  })
}
export function getUserByIdsUsingPATCH(
  id: string,
  spanceId: string,
  {
    params,
  }: { params?: IRequest.PatchRequestGetUserByIdsUsingPATCHParams } = {},
) {
  return request<IRequest.PatchRequestGetUserByIdsUsingPATCHResponses>({
    url: `/getRequest/users/${id}/${spanceId}`,
    method: 'patch',
    params: params || {},
  })
}
