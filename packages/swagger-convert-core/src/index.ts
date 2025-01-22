import fs from 'fs'
import path from 'path'
import {
  generatedRequestCode,
  generatedTsTypeCode,
} from './utils/generatedCode'
import {
  JSONSchema,
  MockJsonInfo,
  RequestFileCodeSort,
  SwaggerOpenApiType,
} from './types'
import {
  swaggerJsonConvert,
  SwaggerJsonConvertReturn,
} from './utils/swaggerJsonConvert'
import superagent from 'superagent'
import { convertSchemaToMock } from './utils/convertSchemaToMock'
/**
 * https://github.com/glideapps/quicktype
 */

/** 获取Swagger的Json */
export const parseSwagger = async (
  swaggerOpenApiUrl: string,
): Promise<SwaggerJsonConvertReturn> => {
  let swaggerOpenApi: SwaggerOpenApiType | null = null
  if (/(https|http):\/\//.test(swaggerOpenApiUrl)) {
    const res = await superagent.get(swaggerOpenApiUrl)
    swaggerOpenApi = res.body
  } else {
    swaggerOpenApi = JSON.parse(fs.readFileSync(swaggerOpenApiUrl, 'utf8'))
  }
  if (!swaggerOpenApi) return {}
  return swaggerJsonConvert(swaggerOpenApi)
}

/** swagger生成tscode */
export const jsonSchemaToTsCode = async ({
  definitionSchemaJson,
  tsNameSpance = 'IApi',
}: {
  definitionSchemaJson: JSONSchema
  tsNameSpance?: string
}) => {
  const code = await generatedTsTypeCode({
    definitionSchemaJson: definitionSchemaJson,
    namespace: tsNameSpance,
  })
  return code
}

/** 生成请求的代码内容 */
export const generatedFileCode = async ({
  requestFileCodeSort,
  generatedCodeFileUrl,
  requestSpanceName,
  importStr = "import request from '../index';",
  tsNameSpance = 'IApi',
  axiosGenerat = true,
}: {
  requestFileCodeSort: RequestFileCodeSort
  /** 生成文件地址 */
  generatedCodeFileUrl: string
  /** 生成空间名称 */
  requestSpanceName: string
  /**
   * 导入函数
   * @eg
   * "import request from '../index';"
   */
  importStr?: string
  /** 生成ts的命名空间，默认IApi */
  tsNameSpance?: string
  /** 是否要生成请求，不生成将去掉请求  */
  axiosGenerat?: boolean
}) => {
  if (axiosGenerat) {
    const axiosUrl = path.join(generatedCodeFileUrl, 'index.ts')
    const isAxios = fs.existsSync(axiosUrl)
    if (!isAxios) {
      const defaultAxiosCode = `import axios from 'axios';
const request = axios.create({
  baseURL: '',
});
export default request;`
      fs.promises.writeFile(axiosUrl, defaultAxiosCode)
    }
  }
  await generatedRequestCode({
    requestFileCodeSort,
    directoryPath: path.join(generatedCodeFileUrl, requestSpanceName),
    importStr,
    nameSpance: tsNameSpance,
  })
}
/** 生成mockjs类型的json */
export const generatedMockJson = ({
  requestFileCodeSort,
  definitionSchemaJson,
}: {
  requestFileCodeSort: RequestFileCodeSort
  definitionSchemaJson: JSONSchema
}) => {
  const mockjsJson = convertSchemaToMock(definitionSchemaJson)
  const mockjsInfo: MockJsonInfo = {}
  for (const key in requestFileCodeSort) {
    const element = requestFileCodeSort[key]
    mockjsInfo[key] = element.map(item => {
      return {
        url: item.url,
        method: item.method,
        responseMockjs: mockjsJson[item.responseTypeName] || {},
      }
    })
  }
  return mockjsInfo
}
