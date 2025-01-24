import instance, { ResResult } from '..'

export const jsonToTs = (params: { json: string }) => {
  return instance.post<ResResult<{ tsCode: string }>>(
    '/toolbox/jsonToTs',
    params,
  )
}
