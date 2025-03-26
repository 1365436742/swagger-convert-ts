import {
  JSONSchema,
  RequestCodeProps,
  RequestFileCodeSort,
  SwaggerOpenApiType,
} from '../types'
import {
  removeUnderscoreProperties,
  replaceAllRefs,
  toCamelCase,
  typeNameGenerated,
} from '.'

export interface SwaggerJsonConvertReturn {
  definitionSchemaJson?: JSONSchema
  requestFileCodeSort?: RequestFileCodeSort
}

export function swaggerJsonConvert(
  swaggerOpenApi: SwaggerOpenApiType,
): SwaggerJsonConvertReturn {
  /** 生成组件的ts类型 */
  const definitionSchemaJson: JSONSchema = {}
  const requestFileCodeSort: RequestFileCodeSort = {}
  Object.keys(swaggerOpenApi.components.schemas).forEach(key => {
    swaggerOpenApi.components.schemas[key].additionalProperties = false
    definitionSchemaJson[key] = swaggerOpenApi.components.schemas[key]
  })

  const paths = swaggerOpenApi.paths
  for (const requestUrl in paths) {
    for (const requestMethods in paths[requestUrl]) {
      const { operationId, tags, parameters, requestBody, responses } =
        paths[requestUrl][requestMethods]

      /** parameters参数 */
      let parametersTypeName = ''
      if (parameters && parameters.length) {
        parametersTypeName = typeNameGenerated('params', operationId, tags)
        const parametersSchema = {
          type: 'object',
          properties: {} as Record<string, JSONSchema>,
          require: [] as string[],
          additionalProperties: false,
        }
        parameters.forEach(item => {
          const { name, required, schema } = item
          parametersSchema.properties[name] = schema
          if (required) parametersSchema.require.push(name)
        })
        definitionSchemaJson[parametersTypeName] = parametersSchema
      }
      /** body参数 */
      const requestBodySchema =
        requestBody?.['content']?.['application/json']?.['schema']
      let requestBodyTypeName = ''
      if (requestBodySchema) {
        requestBodyTypeName = typeNameGenerated('body', operationId, tags)
        if (requestBodySchema.properties) {
          requestBodySchema.additionalProperties = false
        }
        definitionSchemaJson[requestBodyTypeName] = requestBodySchema
      }
      /** responses 响应ts参数 */
      const responsesSchema =
        responses?.['200']?.['content']?.['*/*']?.['schema'] ||
        responses?.['200']?.['content']?.['application/json']?.['schema']
      let responsesTypeName = ''
      if (responsesSchema) {
        responsesTypeName = typeNameGenerated('responses', operationId, tags)
        if (responsesSchema.properties) {
          responsesSchema.additionalProperties =
            responsesSchema.additionalProperties ?? false
        }
        definitionSchemaJson[responsesTypeName] = responsesSchema
      }
      /** 处理如果类型是object，但是没有类型的时候这里不做内容返回。直接输出any*/
      if (
        definitionSchemaJson[responsesTypeName]?.type === 'object' &&
        !definitionSchemaJson[responsesTypeName]?.properties
      ) {
        delete definitionSchemaJson[responsesTypeName]
        responsesTypeName = ''
      }
      const fileName = tags?.join('/') || 'request-ts-base-controller'
      let functionCode: RequestCodeProps = {
        requestMethodName: operationId,
        url: requestUrl,
        method: requestMethods,
        paramsTypeName: toCamelCase(parametersTypeName),
        dataTypeName: toCamelCase(requestBodyTypeName),
        responseTypeName: toCamelCase(responsesTypeName),
      }
      if (!requestFileCodeSort[fileName]) {
        requestFileCodeSort[fileName] = []
      }
      requestFileCodeSort[fileName].push(functionCode)
    }
  }
  return {
    definitionSchemaJson: removeUnderscoreProperties(
      replaceAllRefs(definitionSchemaJson),
    )!,
    requestFileCodeSort,
  }
}
