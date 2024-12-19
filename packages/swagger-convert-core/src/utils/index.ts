import { JSONSchema } from '@/types';
import fs from 'fs';
import { cloneDeep } from 'lodash';
import path from 'path';
export function capitalizeFirstLetter(str: string) {
  if (!str) return ''; // 处理空字符串或非字符串输入
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function typeNameGenerated(
  ext: string,
  operationId: string,
  tags?: string[]
) {
  const tagsStr =
    tags
      ?.map((item) => {
        const str = item.replace(/-([a-z])/g, function (_, letter) {
          return letter.toUpperCase();
        });
        return capitalizeFirstLetter(str);
      })
      ?.join('') || '';
  return (
    tagsStr + capitalizeFirstLetter(operationId) + capitalizeFirstLetter(ext)
  );
}

export function replaceRef($ref: string) {
  const schemaSplit = $ref.split('/');
  return schemaSplit[schemaSplit.length - 1];
}

export function replaceAllRefs(schema: JSONSchema) {
  // 使用递归遍历对象
  function findRefs(obj: JSONSchema) {
    if (typeof obj !== 'object' || obj === null) return obj;
    // 检查当前对象是否有 $ref 属性
    if (obj['$ref']) {
      obj['$ref'] = replaceRef(obj['$ref']);
    }
    // 递归遍历子对象
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object') {
        obj[key] = findRefs(value);
      }
    }
    if (obj['$ref'] && !obj['properties']) {
      obj = {
        allOf: [
          { $ref: obj['$ref'] },
        ],
      };
    }
    return obj;
  }
  return findRefs(schema);
}
/** 去掉下划线首字母大写 */
export function toCamelCase(str: string) {
  // 保留开头的下划线（如果有的话）
  return str.replace(/^_?(.)|_(\d|\D)/g, function (_, firstLetter, letter) {
    if (firstLetter) return firstLetter;
    return letter.toUpperCase();
  });
}

export function copyFolderSync(source: string, target: string) {
  // 检查目标目录是否存在，不存在则创建
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }
  // 读取源目录中的所有文件/目录
  const files: string[] = fs.readdirSync(source);
  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    // 判断是文件还是目录
    if (fs.lstatSync(sourcePath).isDirectory()) {
      // 如果是目录，递归调用
      copyFolderSync(sourcePath, targetPath);
    } else {
      // 如果是文件，直接复制
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}
/**
 * 将字符串格式化并且提取出来里面的值
 * eg: /postRequest/{id}/user/{userId}/details/{detailId}
 * @returns
 * transformedString: /postRequest/${id}/user/${userId}/details/${detailId}
 * variables: ['id', 'userId', 'detailId']
 */
export function transformedString(originalString: string) {
  // 使用正则表达式匹配所有 {variable} 格式的占位符
  const variablePattern = /{([^}]+)}/g;

  let transformedString = originalString;
  let match;
  const variables = [];

  // 使用正则表达式的 exec 方法来遍历所有匹配项
  while ((match = variablePattern.exec(originalString)) !== null) {
    const variableName = match[1]; // 提取变量名
    variables.push(variableName);
    // 替换 {variable} 为 ${variable}
    transformedString = transformedString.replace(
      match[0],
      `\${${variableName}}`
    );
  }
  return { transformedString, variables };
}

/**
 * 解决$ref转为对应的类型
 */
export function resolveRef(schemas: JSONSchema) {
  const cloneSchemas = cloneDeep(schemas)
  const transformRef = (schema: JSONSchema) => {
    if (typeof schema !== 'object' || schema === null) return schema;
    // 检查当前对象是否有 $ref 属性
    if (schema['$ref']) {
      schema['$ref1'] = cloneSchemas[schema['$ref']];
    }
    // 递归遍历子对象
    for (const key in schema) {
      const value = schema[key];
      if (typeof value === 'object') {
        schema[key] = transformRef(value);
      }
    }
    return schema
  }
  for (const key in cloneSchemas) {
    const schema = cloneSchemas[key];
    cloneSchemas[key] = transformRef(schema);
  }

  const deletRefs = (schema: JSONSchema) => {
    if (typeof schema !== 'object' || schema === null) return schema;
    // 检查当前对象是否有 $ref 属性
    if (schema['$ref']) {
      delete schema['$ref'];
      schema = {
        ...schema['$ref1']
      };
    }
    // 递归遍历子对象
    for (const key in schema) {
      const value = schema[key];
      if (typeof value === 'object') {
        schema[key] = deletRefs(value);
      }
    }
    return schema
  }
  for (const key in cloneSchemas) {
    const schema = cloneSchemas[key];
    cloneSchemas[key] = deletRefs(schema);
  }
  return cloneSchemas
}