import fs from 'fs';
import path from 'path';
import { schemaAddSource } from './utils/schemaAddSource';
import { generatedCode } from './utils/generatedCode';
import { SwaggerOpenApiType } from './types';
import { InputData } from 'quicktype-core';
import { swaggerJsonToJsonSchema } from './utils/swaggerJsonToJsonSchema';
const swaggerOpenApi = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../test/swagger/index.json'), 'utf8')
) as SwaggerOpenApiType;

/**
 * https://github.com/glideapps/quicktype
 */
const main = async () => {
  const inputData = new InputData();
  const jsonSchema = swaggerJsonToJsonSchema(swaggerOpenApi);
  const schemaInput = await schemaAddSource({
    schemas: jsonSchema,
  });
  inputData.addInput(schemaInput);

  fs.writeFileSync('./test/output.json', JSON.stringify(jsonSchema, null, 2));

  const code = await generatedCode(inputData);

  fs.writeFileSync('./test/type.d.ts', code);
};
main();
