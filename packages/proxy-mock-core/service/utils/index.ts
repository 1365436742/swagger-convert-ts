import { FileListItem } from '../types/fileMock'
import { PackageJsonOptions } from '../types/index'
import fs from 'fs'
import net from 'net'
/** 获取根目录的package.json信息、判断是ejs还是cjs **/
let packageJson: PackageJsonOptions | null = null

export const fileNameToUrl = (fileName: string) => {
  const fileNameSplit = fileName.split('_')
  const lastIndex = fileNameSplit.length - 1
  const method = fileNameSplit[lastIndex].toLocaleUpperCase()
  const url = '/' + fileNameSplit.slice(0, lastIndex).join('/')
  return {
    url,
    method,
  }
}
export const urlToFileName = ({ url, method }: FileListItem) => {
  return `${url
    .replace(/^\/+/, '')
    .replace(/\//g, '_')}_${method.toLocaleUpperCase()}`
}

export const sleep = (time: number = 0) => {
  return new Promise(resolve => {
    if (!time) return resolve('')
    setTimeout(() => {
      resolve('')
    }, time)
  })
}

export const readJson = async (url: string, ignoreError: boolean = false) => {
  try {
    const indexJson = await fs.promises.readFile(url, 'utf-8')
    return JSON.parse(indexJson)
  } catch (error) {
    if (!ignoreError) {
      console.error('获取json文件失败', error)
    }
    return {}
  }
}

/** 获取根目录的package.json信息、判断是ejs还是cjs */
export const getPackageJson = () => {
  if (packageJson) return packageJson
  packageJson = readJson('package.json') as { type?: string }
  return packageJson
}

/** 判断是否是ejs */
export function isEjs() {
  if (require?.cache) {
    return false
  }
  return true
}

export async function dynamicReadJs(url: string) {
  const ejsEnv = isEjs()
  const os = process.platform
  let filePrefix = os === 'win32' && ejsEnv ? 'file://' : ''
  const importUrl = filePrefix + url
  if (!ejsEnv) {
    delete require.cache[url]
    return await require(importUrl)
  } else {
    const fn = await import(`${importUrl}?t=${Date.now()}`)
    return fn.default
  }
}

export async function getAvailablePort(port: number) {
  function isPortAvailable() {
    const timeout = 1000
    return new Promise(resolve => {
      const server = net.createServer()
      // 设置超时
      const timeoutId = setTimeout(() => {
        server.close()
        resolve(false)
      }, timeout)
      server.once('error', () => {
        clearTimeout(timeoutId)
        resolve(false)
      })
      server.once('listening', () => {
        clearTimeout(timeoutId)
        server.close()
        resolve(port)
      })
      server.listen(port)
    })
  }
  let resutPort = await isPortAvailable()
  if (resutPort === false) {
    resutPort = await getAvailablePort(port + 1)
  }
  return resutPort
}
