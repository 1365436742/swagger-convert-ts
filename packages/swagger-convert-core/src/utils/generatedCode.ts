import { InputData, quicktype } from 'quicktype-core';
import { format } from 'prettier';
import { JSONSchema, RequestCodeProps, RequestFileCodeSort } from '@/types';
import path from 'path';
import fs from 'fs';
import { transformedString } from '.';
import { compile } from 'json-schema-to-typescript';

/**
 * 补偿处理ts未转ts的问题
 * "additionalProperties": {
 *    "type": "integer",
 *    "format": "int32"
 * }
 */
export async function compensationProcessingTsCode(
  definitionSchemaJson: Record<string, JSONSchema>
) {
  /** 补偿的tscode。有些类型无法直接通过quicktype-core解析成ts */
  let compensationTsCode = '';
  for (const key in definitionSchemaJson) {
    const element = definitionSchemaJson[key];
    if (
      !element.properties &&
      typeof element.additionalProperties === 'object'
    ) {
      try {
        const tsCode = await compile(element, key);
        compensationTsCode += tsCode;
      } catch (error) {
        console.error('补偿解析失败');
      }
    }
  }
  return compensationTsCode;
}

export const generatedTsTypeCode = async (
  inputData: InputData,
  compensationTsCode: string = ''
) => {
  // 生成 TypeScript 代码
  const { lines } = await quicktype({
    inputData,
    rendererOptions: {
      'just-types': 'true', // 设置只生成类型
      'acronym-style': 'original', // 解决Id变成了ID
      // 'prefer-unions': 'false',
      'explicit-unions': 'true',
      // 'prefer-types': 'true',
    },
    lang: 'typescript',
  });
  const tsCode = lines.join('\n');
  // 使用 Prettier 格式化代码
  const formattedCode = await format(
    `namespace IApi{${tsCode + compensationTsCode}}`,
    {
      parser: 'typescript',
    }
  );
  return formattedCode;
};
const typeFix = (name: string) => {
  if (name) return `IApi.${name}`;
  return 'any';
};

export const codeTemplaate = (requestCodeProps: RequestCodeProps) => {
  const {
    requestMethodName,
    responseTypeName,
    url,
    method,
    paramsTypeName,
    dataTypeName,
  } = requestCodeProps;
  // 构建类型声明
  const typeParts = [];
  const dataParats = [];
  if (paramsTypeName) {
    typeParts.push(`params?: IApi.${paramsTypeName}`);
    dataParats.push('params');
  }
  if (dataTypeName) {
    typeParts.push(`data?: IApi.${dataTypeName}`);
    dataParats.push('data');
  }
  const type = `{${typeParts.join(', ')}}`;
  const data = `{${dataParats.join(', ')}}`;
  // 构建函数参数
  const hasParamsOrData = paramsTypeName || dataTypeName;
  const functionParams = hasParamsOrData ? `${data}: ${type} = {}` : '';
  const { transformedString: transformedUrl, variables } =
    transformedString(url);
  let funcRestParams = '';
  if (variables.length) {
    funcRestParams = variables.map((i) => `${i}:string`).join(',') + ',';
  }
  // 返回函数定义
  return `export function ${requestMethodName}(${funcRestParams}${functionParams}) {
    return request<${typeFix(responseTypeName)}>({
      url: \`${transformedUrl}\`,
      method: '${method}',
      ${paramsTypeName ? 'params: params || {},' : ''}
      ${dataTypeName ? 'data: data || {},' : ''}
    });
  };`;
};

export const generatedRequestCode = async (
  requestFileCodeSort: RequestFileCodeSort,
  directoryPath: string,
  importStr: string = "import request from '../index';"
) => {
  for (const fileSpance in requestFileCodeSort) {
    let codeResult = importStr;
    const functionCodeList = requestFileCodeSort[fileSpance];
    const filePath = path.join(directoryPath, fileSpance + '.ts');
    for (let j = 0; j < functionCodeList.length; j++) {
      const requestCodeProps = functionCodeList[j];
      codeResult += codeTemplaate(requestCodeProps);
    }
    const formattedCode = await format(codeResult, {
      parser: 'typescript',
    });
    // 创建目录
    fs.mkdirSync(directoryPath, { recursive: true });
    // 创建文件
    fs.writeFileSync(filePath, formattedCode);
  }
};
