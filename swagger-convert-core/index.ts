import fs from 'fs';
import { schemaAddSource } from './utils/schemaAddSource';
import { generatedCode } from './utils/generatedCode';
/**
 * https://github.com/glideapps/quicktype
 */
const main = async () => {
  const inputData = await schemaAddSource({
    name: 'GenerAA',
    schemaJson: {
      type: 'object',
      properties: {
        union: {
          oneOf: [
            {
              type: 'boolean',
            },
            {
              type: 'number',
            },
          ],
        },
        enum: {
          type: 'string',
          enum: ['red', 'green', 'blue'],
        },
        foo: {
          type: 'string',
        },
        bar: {
          type: 'string',
        },
      },
      additionalProperties: false,
    },
  });
  const code = await generatedCode(inputData);
  fs.writeFileSync('./test/type.d.ts', code);
};
main();
