import request from '../index'
export function bodyListItemsUsingPATCH({
  params,
  data,
}: {
  params?: IApi.PatchRequestBodyListItemsUsingPATCHParams
  data?: IApi.PatchRequestBodyListItemsUsingPATCHBody
} = {}) {
  return request<IApi.PatchRequestBodyListItemsUsingPATCHResponses>({
    url: `/getRequest/getBody`,
    method: 'patch',
    params: params || {},
    data: data || {},
  })
}
export function searchItemsUsingPATCH({
  params,
}: { params?: IApi.PatchRequestSearchItemsUsingPATCHParams } = {}) {
  return request<IApi.PatchRequestSearchItemsUsingPATCHResponses>({
    url: `/getRequest/search`,
    method: 'patch',
    params: params || {},
  })
}
export function getUserByIdUsingPATCH(
  id: string,
  { params }: { params?: IApi.PatchRequestGetUserByIdUsingPATCHParams } = {},
) {
  return request<IApi.PatchRequestGetUserByIdUsingPATCHResponses>({
    url: `/getRequest/users/${id}`,
    method: 'patch',
    params: params || {},
  })
}
export function getUserByIdsUsingPATCH(
  id: string,
  spanceId: string,
  { params }: { params?: IApi.PatchRequestGetUserByIdsUsingPATCHParams } = {},
) {
  return request<IApi.PatchRequestGetUserByIdsUsingPATCHResponses>({
    url: `/getRequest/users/${id}/${spanceId}`,
    method: 'patch',
    params: params || {},
  })
}
