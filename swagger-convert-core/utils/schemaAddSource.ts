import {
  FetchingJSONSchemaStore,
  InputData,
  JSONSchemaInput,
} from 'quicktype-core';

interface SchemaAddSourceParams {
  schemaJson: Record<string, any> | string;
  /** 生成ts的名称类型 */
  name: string;
}
export const schemaAddSource = async ({
  schemaJson,
  name,
}: SchemaAddSourceParams) => {
  // 创建一个 JSON 输入对象
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());
  // 添加 JSON Schema 作为输入源
  await schemaInput.addSource({
    name, // 生成类型的名称
    schema:
      typeof schemaJson === 'string' ? schemaJson : JSON.stringify(schemaJson), // JSON Schema 字符串
  });

  const inputData = new InputData();
  inputData.addInput(schemaInput);
  return inputData;
};
