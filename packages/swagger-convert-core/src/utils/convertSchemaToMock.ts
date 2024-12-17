import { JSONSchema } from "@/types";

function resolveRef(schema: JSONSchema, ref: string) {
    const path = ref.replace(/^#\//, '').split('/');
    let current = schema;
    for (const part of path) {
        current = current[part];
    }
    return current;
}
function mergeAllOf(schema: JSONSchema, allOfArray: Record<string, any>[]) {
    return allOfArray.reduce((acc, item) => {
        if (item.$ref) {
            const refSchema = resolveRef(schema, item.$ref);
            return { ...acc, ...refSchema, ...item };
        }
        return { ...acc, ...item };
    }, {});
}
export function convertSchemaToMock(schemas: JSONSchema) {
    const mock: Record<string, any> = {};
    const convertProperties = (properties: Record<string, any>) => {
        const currentMockInfo: Record<string, any> = {}
        if (properties) {
            for (const key in properties) {
                const property = properties[key];
                switch (property.type) {
                    case 'integer':
                        currentMockInfo[key] = '@integer(1, 100)';
                        break;
                    case 'string':
                        if (property.format === 'email') {
                            currentMockInfo[key] = '@EMAIL';
                        } else if (property.enum) {
                            currentMockInfo[key] = property.enum[0];  // Choose first enum value as example
                        } else {
                            currentMockInfo[key] = '@string';
                        }
                        break;
                    case 'boolean':
                        currentMockInfo[key] = '@boolean';
                        break;
                    case 'array':
                        currentMockInfo[key] = {
                            "array|1-10": [
                                {}
                            ]
                        };
                        break;
                    default:
                        currentMockInfo[key] = '@string';
                }
            }

        }
    }
    for (const [name, schema] of Object.entries(schemas)) {
        const properties = schema.properties
        mock[name] = convertProperties(properties)
        return mock;
    }
}