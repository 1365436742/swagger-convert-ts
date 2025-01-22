/**
 *  解决ts生成重复的类型
 */
export const processTsCode = () => {
  const generatedInterfaces = new Set<string>()
  return (ts: string) => {
    const lines = ts.split('\n')
    let currentInterface = ''
    let processedLines: string[] = []
    let skipUntilNextDefinition = false

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmedLine = line.trim()

      // 处理接口定义
      if (trimmedLine.startsWith('export interface ')) {
        const interfaceName = trimmedLine.split(' ')[2]

        if (generatedInterfaces.has(interfaceName)) {
          skipUntilNextDefinition = true
          continue
        }

        skipUntilNextDefinition = false
        currentInterface = interfaceName
        generatedInterfaces.add(interfaceName)
        processedLines.push(line)
      }
      // 处理类型定义
      else if (trimmedLine.startsWith('export type ')) {
        skipUntilNextDefinition = false
        currentInterface = ''
        processedLines.push(line)
      }
      // 处理其他行
      else if (!skipUntilNextDefinition) {
        processedLines.push(line)
      }
    }

    // 移除多余的空行
    return processedLines
      .reduce((acc, line, index, array) => {
        // 如果当前行和下一行都是空行，跳过当前行
        if (line.trim() === '' && array[index + 1]?.trim() === '') {
          return acc
        }
        acc.push(line)
        return acc
      }, [] as string[])
      .join('\n')
  }
}
