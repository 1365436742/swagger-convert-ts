import fs from 'fs';
import path from 'path';
import { schemaAddSource } from './utils/schemaAddSource';
import {
  compensationProcessingTsCode,
  generatedRequestCode,
  generatedTsTypeCode,
} from './utils/generatedCode';
import { JSONSchema, RequestFileCodeSort, SwaggerOpenApiType } from './types';
import { InputData } from 'quicktype-core';
import { swaggerJsonToJsonSchema, SwaggerJsonToJsonSchemaReturn } from './utils/swaggerJsonToJsonSchema';
import { copyFolderSync } from './utils';
import axios from 'axios';
/**
 * https://github.com/glideapps/quicktype
 */

/** 获取Swagger的Json */
export const parseSwagger = async (swaggerOpenApiUrl: string): Promise<SwaggerJsonToJsonSchemaReturn> => {
  let swaggerOpenApi: SwaggerOpenApiType | null = null;
  if (/(https|http):\/\//.test(swaggerOpenApiUrl)) {
    const res = await axios.get(swaggerOpenApiUrl);
    swaggerOpenApi = res.data;
  } else {
    swaggerOpenApi = JSON.parse(
      fs.readFileSync(swaggerOpenApiUrl, 'utf8')
    );
  }
  if (!swaggerOpenApi) return {}
  return swaggerJsonToJsonSchema(swaggerOpenApi);
}

/** swagger生成tscode */
export const jsonSchemaToTsCode = async ({
  definitionSchemaJson,
  tsNameSpance = "IApi"
}: {
  definitionSchemaJson: JSONSchema,
  tsNameSpance?: string
}) => {
  const inputData = new InputData();
  const schemaInput = await schemaAddSource({
    schemas: definitionSchemaJson,
  });
  inputData.addInput(schemaInput);
  const compensationTsCode = await compensationProcessingTsCode(definitionSchemaJson);
  const code = await generatedTsTypeCode({
    inputData,
    compensationTsCode,
    namespace: tsNameSpance
  });
  return code
}

/** 生成请求的代码内容 */
export const generatedFileCode = async ({
  requestFileCodeSort,
  generatedCodeFileUrl,
  requestSpanceName,
  importStr = "import request from '../index';",
  tsNameSpance = 'IApi'
}: {
  requestFileCodeSort: RequestFileCodeSort,
  /** 生成文件地址 */
  generatedCodeFileUrl: string,
  /** 生成空间名称 */
  requestSpanceName: string
  /** 
  * 导入函数
  * @eg
  * "import request from '../index';"
  */
  importStr?: string,
  /** 生成ts的命名空间，默认IApi */
  tsNameSpance?: string
}) => {
  copyFolderSync(path.join(__dirname, './template'), generatedCodeFileUrl);
  await generatedRequestCode({
    requestFileCodeSort,
    directoryPath: path.join(generatedCodeFileUrl, 'request', requestSpanceName),
    importStr,
    nameSpance: tsNameSpance
  });
}