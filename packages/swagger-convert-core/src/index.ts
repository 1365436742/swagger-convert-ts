import fs from 'fs';
import path from 'path';
import { schemaAddSource } from './utils/schemaAddSource';
import {
  generatedRequestCode,
  generatedTsTypeCode,
} from './utils/generatedCode';
import { SwaggerOpenApiType } from './types';
import { InputData } from 'quicktype-core';
import { swaggerJsonToJsonSchema } from './utils/swaggerJsonToJsonSchema';
import { copyFolderSync } from './utils';

const config = {
  /** swagger地址。支持https|http、本地文件目录 */
  swaggerOpenApiUrl: path.resolve(__dirname, '../test/swagger/test2.json'),
  generatedCodeFileUrl: './test',
  /** 生成本次接口的应用空间名称 */
  requestSpanceName: 'request-test',
};
const { generatedCodeFileUrl, swaggerOpenApiUrl, requestSpanceName } = config;
const swaggerOpenApi = JSON.parse(
  fs.readFileSync(swaggerOpenApiUrl, 'utf8')
) as SwaggerOpenApiType;
/**
 * https://github.com/glideapps/quicktype
 */
const main = async () => {
  const inputData = new InputData();
  const { definitionSchemaJson, requestFileCodeSort } =
    swaggerJsonToJsonSchema(swaggerOpenApi);
  const schemaInput = await schemaAddSource({
    schemas: definitionSchemaJson,
  });
  inputData.addInput(schemaInput);
  copyFolderSync(path.join(__dirname, './template'), generatedCodeFileUrl);
  await generatedRequestCode(
    requestFileCodeSort,
    path.join(config.generatedCodeFileUrl, 'request', requestSpanceName)
  );

  const code = await generatedTsTypeCode(inputData);

  fs.writeFileSync(
    './test/output.json',
    JSON.stringify(definitionSchemaJson, null, 2)
  );
  fs.writeFileSync(
    './test/functionCodeList.json',
    JSON.stringify(requestFileCodeSort, null, 2)
  );
  fs.writeFileSync('./test/type.d.ts', code);
};
main();
