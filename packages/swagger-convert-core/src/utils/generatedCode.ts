import { InputData, quicktype } from 'quicktype-core';
import prettier from 'prettier';
import { RequestCodeProps, RequestFileCodeSort } from '@/types';
import path from 'path';
import fs from 'fs';

export const generatedTsTypeCode = async (inputData: InputData) => {
  // 生成 TypeScript 代码
  const { lines } = await quicktype({
    inputData,
    rendererOptions: {
      'just-types': 'true', // 设置只生成类型
      'acronym-style': 'original', // 解决Id变成了ID
      'prefer-unions': 'false',
      'prefer-types': 'true',
    },
    lang: 'typescript',
  });
  const tsCode = lines.join('\n');
  // 使用 Prettier 格式化代码
  const formattedCode = await prettier.format(`namespace IApi{${tsCode}}`, {
    parser: 'typescript',
  });
  return formattedCode;
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
    dataParats.push('params,');
  }
  if (dataTypeName) {
    typeParts.push(`data?: IApi.${dataTypeName}`);
    dataParats.push('data,');
  }
  const type = `{${typeParts.join(', ')}}`;
  const data = `{${dataParats.join(', ')}}`;
  // 构建函数参数
  const hasParamsOrData = paramsTypeName || dataTypeName;
  const functionParams = hasParamsOrData ? `${data}: ${type} = {}` : '';
  // 返回函数定义
  return `export function ${requestMethodName}(${functionParams}) {
    return request<IApi.${responseTypeName}>({
      url: \`${url}\`,
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
    const formattedCode = await prettier.format(codeResult, {
      parser: 'typescript',
    });
    // 创建目录
    fs.mkdirSync(directoryPath, { recursive: true });
    // 创建文件
    fs.writeFileSync(filePath, formattedCode);
  }
};
