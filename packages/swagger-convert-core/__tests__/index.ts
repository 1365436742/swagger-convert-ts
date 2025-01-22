import path from 'path'
import fs from 'fs'

export function writeFileSync(filePath: string, fileContent: string) {
  const dirPath = path.dirname(filePath)
  // 尝试创建目录，如果目录已存在则不会报错
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true })
    }
  } catch (err: any) {
    console.error(`Failed to create directory: ${err}`)
    return
  }
  try {
    fs.writeFileSync(filePath, fileContent, 'utf8')
  } catch (err: any) {
    console.error(`Failed to write file: ${err}`)
  }
}
