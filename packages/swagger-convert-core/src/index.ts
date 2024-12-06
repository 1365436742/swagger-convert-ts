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
const swaggerOpenApi = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../test/swagger/index.json'), 'utf8')
) as SwaggerOpenApiType;
/**
 * https://github.com/glideapps/quicktype
 */
const main = async () => {
  console.log(swaggerOpenApi)
  const inputData = new InputData();
  const { definitionSchemaJson, requestFileCodeSort } =
    swaggerJsonToJsonSchema(swaggerOpenApi);
  const schemaInput = await schemaAddSource({
    schemas: definitionSchemaJson,
  });
  inputData.addInput(schemaInput);
  copyFolderSync('./template', './test');
  // fs.unlinkSync('./test/request/request-test');
  await generatedRequestCode(
    requestFileCodeSort,
    './test/request/request-test'
  );
  fs.writeFileSync(
    './test/output.json',
    JSON.stringify(definitionSchemaJson, null, 2)
  );
  fs.writeFileSync(
    './test/functionCodeList.json',
    JSON.stringify(requestFileCodeSort, null, 2)
  );

  const code = await generatedTsTypeCode(inputData);

  fs.writeFileSync('./test/type.d.ts', code);
};
main();
