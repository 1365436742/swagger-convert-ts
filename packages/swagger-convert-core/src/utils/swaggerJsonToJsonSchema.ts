import { SchemaPropertiesType, SwaggerOpenApiType } from '@/types';
import { replaceAllRefs, typeNameGenerated } from '.';

export function swaggerJsonToJsonSchema(swaggerOpenApi: SwaggerOpenApiType) {
  /** 生成组件的ts类型 */
  const definitionSchemaJson: Record<string, any> = {};
  Object.keys(swaggerOpenApi.components.schemas).forEach((key) => {
    swaggerOpenApi.components.schemas[key].additionalProperties = false;
    definitionSchemaJson[key] = swaggerOpenApi.components.schemas[key];
  });

  const paths = swaggerOpenApi.paths;
  for (const requestUrl in paths) {
    for (const requestMethods in paths[requestUrl]) {
      const { operationId, tags, parameters, requestBody, responses } =
        paths[requestUrl][requestMethods];
      /** parameters参数 */
      if (parameters && parameters.length) {
        const parametersTypeName = typeNameGenerated(
          'params',
          operationId,
          tags
        );
        const parametersSchema = {
          type: 'object',
          properties: {} as Record<string, SchemaPropertiesType>,
          require: [] as string[],
          additionalProperties: false,
        };
        parameters.forEach((item) => {
          const { name, required, schema } = item;
          parametersSchema.properties[name] = schema;
          if (required) parametersSchema.require.push(name);
        });
        definitionSchemaJson[parametersTypeName] = parametersSchema;
      }
      /** body参数 */
      const requestBodySchema =
        requestBody?.['content']?.['application/json']?.['schema'];
      if (requestBodySchema) {
        const requestBodyTypeName = typeNameGenerated(
          'body',
          operationId,
          tags
        );
        if (requestBodySchema.properties) {
          requestBodySchema.additionalProperties = false;
        }
        definitionSchemaJson[requestBodyTypeName] = requestBodySchema;
      }
      /** responses 响应ts参数 */
      const responsesSchema =
        responses?.['200']?.['content']?.['*/*']?.['schema'];
      if (responsesSchema) {
        const responsesTypeName = typeNameGenerated(
          'responses',
          operationId,
          tags
        );
        if (responsesSchema.properties) {
          responsesSchema.additionalProperties = false;
        }
        definitionSchemaJson[responsesTypeName] = responsesSchema;
      }
    }
  }
  replaceAllRefs(definitionSchemaJson);
  return definitionSchemaJson;
}
