import instance, { ResResult } from '..'

export const senceCodeTemplate = () => {
  return instance.get<ResResult<{ code: string }>>('/codeTemplate/senceDefault')
}
