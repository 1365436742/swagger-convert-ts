import { JSONSchema } from '../types'

export function convertSchemaToMock(schemas: JSONSchema) {
  const mock: Record<string, any> = {}
  const jsonSchemaTypeMapMockjs = (property: Record<string, any>) => {
    switch (property.type) {
      case 'integer':
        return '@integer(1, 100)'
      case 'string':
        if (property.format === 'email') {
          return '@EMAIL'
        } else if (property.enum) {
          return property.enum[0] // Choose first enum value as example
        } else {
          return '@string'
        }
      case 'boolean':
        return '@boolean'
      default:
        return '@string'
    }
  }
  const convertSchema = (schema: JSONSchema) => {
    const { properties, allOf, $ref, type } = schema
    let currentMockInfo: Record<string, any> = {}
    if (properties) {
      for (const key in properties) {
        const property = properties[key]
        currentMockInfo[key] = convertSchema(property)
      }
    } else if ($ref) {
      currentMockInfo = convertSchema(schemas[$ref.replace('#/', '')])
    } else if (allOf?.length > 0) {
      allOf.map((item: JSONSchema) => {
        currentMockInfo = {
          ...currentMockInfo,
          ...convertSchema(item),
        }
      })
    } else if (type === 'array' && schema.items) {
      currentMockInfo = {
        'array|1-10': [convertSchema(schema.items)],
      }
    } else {
      currentMockInfo = jsonSchemaTypeMapMockjs(schema)
    }
    return currentMockInfo
  }
  for (const [name, schema] of Object.entries(schemas)) {
    mock[name] = convertSchema(schema)
  }
  return mock
}
