import { format } from 'prettier';
import { GeneratedRequestCodeProps, GeneratedTsTypeCodeProps, JSONSchema, RequestCodeProps } from '@/types';
import path from 'path';
import fs from 'fs';
import { resolveRef, transformedString } from '.';
import { compile } from 'json-schema-to-typescript';



export const generatedTsTypeCode = async (props: GeneratedTsTypeCodeProps) => {
  const { definitionSchemaJson, namespace = 'IApi' } = props
  const schemas = await resolveRef(definitionSchemaJson);
  let tsCode = ""
  for (const [name, schema] of Object.entries(schemas)) {
    const curCode = await compile(schema, name);
    tsCode += curCode
  }
  // 使用 Prettier 格式化代码
  const formattedCode = await format(
    `namespace ${namespace}{${tsCode}}`,
    {
      parser: 'typescript',
    }
  );
  return formattedCode;
};

const typeFix = (name: string, nameSpance: string) => {
  if (name) return `${nameSpance}.${name}`;
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
    nameSpance = "IApi"
  } = requestCodeProps;
  // 构建类型声明
  const typeParts = [];
  const dataParats = [];
  if (paramsTypeName) {
    typeParts.push(`params?: ${nameSpance}.${paramsTypeName}`);
    dataParats.push('params');
  }
  if (dataTypeName) {
    typeParts.push(`data?: ${nameSpance}.${dataTypeName}`);
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
    return request<${typeFix(responseTypeName, nameSpance)}>({
      url: \`${transformedUrl}\`,
      method: '${method}',
      ${paramsTypeName ? 'params: params || {},' : ''}
      ${dataTypeName ? 'data: data || {},' : ''}
    });
  };`;
};


export const generatedRequestCode = async (props: GeneratedRequestCodeProps) => {
  const {
    requestFileCodeSort,
    directoryPath,
    importStr = "import request from '../index';",
    nameSpance
  } = props
  for (const fileSpance in requestFileCodeSort) {
    let codeResult = importStr;
    const functionCodeList = requestFileCodeSort[fileSpance];
    const filePath = path.join(directoryPath, fileSpance + '.ts');
    for (let j = 0; j < functionCodeList.length; j++) {
      const requestCodeProps = functionCodeList[j];
      requestCodeProps.nameSpance = nameSpance;
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
