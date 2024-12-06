import {
  FetchingJSONSchemaStore,
  jsonInputForTargetLanguage,
  JSONSchemaInput,
} from 'quicktype-core';

interface SchemaAddSourceParams {
  schemas: Record<string, any>;
}
export const schemaAddSource = async ({ schemas }: SchemaAddSourceParams) => {
  // 创建一个 JSON 输入对象
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
  for (const [name, schema] of Object.entries(schemas)) {
    await schemaInput.addSource({
      name,
      schema: JSON.stringify(schema),
    });
  }
  return schemaInput;
};

interface JsonAddSourceParams {
  json: Record<string, any> | string;
  /** 生成ts的名称类型 */
  name: string;
}
export const jsonAddSource = async ({ json, name }: JsonAddSourceParams) => {
  const jsonInput = jsonInputForTargetLanguage('typescript');

  // 将 JSON 数据添加到输入
  await jsonInput.addSource({
    name,
    samples: [typeof json === 'string' ? json : JSON.stringify(json)],
  });
  return jsonInput;
};
