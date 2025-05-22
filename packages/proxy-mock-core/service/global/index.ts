declare global {
  var fileAlias: Record<string, string>
}
/** 文件别名，因为系统文件中有的不允许存储，所以要取别名替代 */
global.fileAlias = {
  '?': '--qa--',
  ':': '--colon--',
}
export const getFileAlias = () => {
  return global.fileAlias
}
export const setFileAlias = (newFileAlias: Record<string, string> = {}) => {
  Object.assign(global.fileAlias, newFileAlias)
}
