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
