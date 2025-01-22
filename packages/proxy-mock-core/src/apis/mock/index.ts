import instance, { ResResult } from '..'

export interface AddMockParams {
  sence?: string
  mock: boolean
  delay: number
  url: string
  method: string
}

export interface DeleteMockParams {
  url: string
  method: string
}

export interface UpdateMockParams {
  sence?: string
  mock: boolean
  delay: number
  url: string
  method: string
  sourceFileInfo: {
    url: string
    method: string
  }
}

export interface MockListRes {
  sence?: string
  mock: boolean
  delay: number
  url: string
  method: string
  senceList: string[]
}

export const addMock = (params: AddMockParams) => {
  return instance.post<ResResult>('/mock/addMock', params)
}

export const deleteMock = (params: DeleteMockParams) => {
  return instance.post<ResResult>('/mock/deleteMock', params)
}

export const updateMock = (params: UpdateMockParams) => {
  return instance.post<ResResult>('/mock/updateMock', params)
}

export const toggleMock = (params: DeleteMockParams) => {
  return instance.post<ResResult>('/mock/toggleMock', params)
}

export const getMockList = () => {
  return instance.get<ResResult<MockListRes[]>>('/mock/mockList')
}
