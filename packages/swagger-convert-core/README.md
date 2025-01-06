# 核心转换

## 简介

本工具将swagger转换为标准schema-json格式、ts类型code、axios请求code、mockjs的json

## 解析swagger内容

```js
/** 
  * swaggerUrl 支持http 请求、支持文件读取swaggerJson文件
  * eg: http://localhost:8080/v3/api-docs
  * file: ../index.json
  * 示例可以查看githup测试用例
  * https://github.com/1365436742/swagger-convert-ts/blob/main/packages/swagger-convert-core/__tests__
  */
const { definitionSchemaJson, requestFileCodeSort } = await parseSwagger(swaggerUrl);
// definitionSchemaJson 解析出jsonschema
// requestFileCodeSort 所有url、ts名称，相当于后续生成的AST
```

## 转换json-schema

```js
import { parseSwagger } from 'swagger-convert-core'
import { JSONSchema, RequestFileCodeSort } from 'swagger-convert-core/types'; 
const {definitionSchemaJson , requestFileCodeSort} = await parseSwagger(swaggerOpenApiUrl);
```

## 转换为mockjs

```js
import { parseSwagger } from 'swagger-convert-core'
import { JSONSchema, RequestFileCodeSort } from 'swagger-convert-core/types'; 
const {definitionSchemaJson , requestFileCodeSort} = await parseSwagger(swaggerOpenApiUrl);
const mockJson = generatedMockJson({
    definitionSchemaJson,
    requestFileCodeSort
})
```

## 转换tscode

```js
import { jsonSchemaToTsCode } from 'swagger-convert-core'
const code = await jsonSchemaToTsCode({ definitionSchemaJson });
```

## 转换前端的axios-code

```js
import { generatedFileCode } from 'swagger-convert-core'
const config = {
    generatedCodeFileUrl: path.resolve(__dirname, './generate-test'),
    /** 生成本次接口的应用空间名称 */
    requestSpanceName: 'request-test',
};
const { generatedCodeFileUrl, requestSpanceName } = config;
await generatedFileCode({
    requestFileCodeSort,
    generatedCodeFileUrl,
    requestSpanceName
})
```
