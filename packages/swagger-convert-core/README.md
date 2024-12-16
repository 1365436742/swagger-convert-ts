# 核心转换

## 简介

本工具将swagger转换为标准schema-json格式、ts类型code、axios请求code、mockjs的json

## 转换json-schema

```js
import { parseSwagger } from 'swagger-convert-core'
import { JSONSchema, RequestFileCodeSort } from 'swagger-convert-core/types'; 
const {definitionSchemaJson , requestFileCodeSort} = await parseSwagger(swaggerOpenApiUrl);
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
