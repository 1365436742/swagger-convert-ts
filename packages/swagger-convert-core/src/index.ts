import fs from 'fs';
import path from 'path';
import { schemaAddSource } from './utils/schemaAddSource';
import {
  generatedRequestCode,
  generatedTsTypeCode,
} from './utils/generatedCode';
import { JSONSchema, RequestFileCodeSort, SwaggerOpenApiType } from './types';
import { InputData } from 'quicktype-core';
import { swaggerJsonToJsonSchema } from './utils/swaggerJsonToJsonSchema';
import { copyFolderSync } from './utils';


/** 获取Swagger的Json */
export const parseSwagger = (swaggerOpenApiUrl: string) => {
  const swaggerOpenApi = JSON.parse(
    fs.readFileSync(swaggerOpenApiUrl, 'utf8')
  ) as SwaggerOpenApiType;
  return swaggerJsonToJsonSchema(swaggerOpenApi)
}

/** swagger生成tscode */
export const jsonSchemaToTsCode = async (definitionSchemaJson: JSONSchema) => {
  const inputData = new InputData();
  const schemaInput = await schemaAddSource({
    schemas: definitionSchemaJson,
  });
  inputData.addInput(schemaInput);
  const code = await generatedTsTypeCode(inputData);
  return code
}

/** 生成请求的代码内容 */
export const generatedFileCode = async ({
  requestFileCodeSort,
  generatedCodeFileUrl,
  requestSpanceName
}: {
  requestFileCodeSort: RequestFileCodeSort,
  /** 生成文件地址 */
  generatedCodeFileUrl: string,
  /** 生成空间名称 */
  requestSpanceName: string
}) => {
  copyFolderSync(path.join(__dirname, './template'), generatedCodeFileUrl);
  await generatedRequestCode(
    requestFileCodeSort,
    path.join(generatedCodeFileUrl, 'request', requestSpanceName)
  );
}


// /**
//  * https://github.com/glideapps/quicktype
//  */
// const main = async () => {
//   const config = {
//     /** swagger地址。支持https|http、本地文件目录 */
//     swaggerOpenApiUrl: path.resolve(__dirname, '../test/swagger/index.json'),
//     generatedCodeFileUrl: './test',
//     /** 生成本次接口的应用空间名称 */
//     requestSpanceName: 'request-test',
//   };
//   const { generatedCodeFileUrl, swaggerOpenApiUrl, requestSpanceName } = config;
//   const { definitionSchemaJson, requestFileCodeSort } = parseSwagger(swaggerOpenApiUrl);
//   const code = await jsonSchemaToTsCode(definitionSchemaJson);
//   generatedFileCode({
//     requestFileCodeSort,
//     generatedCodeFileUrl,
//     requestSpanceName
//   })
//   fs.writeFileSync(
//     './test/output.json',
//     JSON.stringify(definitionSchemaJson, null, 2)
//   );
//   fs.writeFileSync(
//     './test/functionCodeList.json',
//     JSON.stringify(requestFileCodeSort, null, 2)
//   );
//   fs.writeFileSync('./test/type.d.ts', code);
// };
// main();