/**
 * 从路径中提取动态参数（例如 `/prefix/:param1/:param2/suffix`）
 * @param path 待解析的路径（如 `/use/123/456/history`）
 * @param pattern 目标模式（如 `/:userId/:base/history` 或 `use/:userId/:base/*`）
 * @returns 返回参数对象，若路径不匹配则返回 null
 */
export function extractRouteParams(path: string, pattern: string) {
  // 规范化输入路径和模式（移除首尾斜杠）
  const normalizedPath = path.replace(/^\/|\/$/g, '')
  const normalizedPattern = pattern.replace(/^\/|\/$/g, '')

  // 转换模式为正则表达式
  const regexStr = normalizedPattern
    .replace(/\/:\w+/g, '/([^/]+)') // 替换 ":param" 为捕获组
    .replace(/\*/g, '[^/]*') // 支持通配符 "*"

  const regex = new RegExp('^' + regexStr + '$')
  const match = normalizedPath.match(regex)

  if (!match) return null

  // 提取参数名
  const paramMatches = normalizedPattern.matchAll(/\/:(\w+)/g)
  const paramKeys = Array.from(paramMatches, match => match[1])

  // 构建参数对象
  const params: Record<string, string> = {}
  paramKeys.forEach(function (key, index) {
    params[key] = match[index + 1]
  })

  return params
}

/**
 * 检查路径是否包含动态参数（如 /:id, /:slug 等形式）
 * @param {string} path - 要检查的路径（如 "/users/:id/posts/:postId"）
 * @return {boolean} 是否包含动态参数
 */
export function hasDynamicParams(path: string) {
  return /\/:\w+/.test(path)
}
