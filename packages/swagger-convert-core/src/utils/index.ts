import fs from 'fs';
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

export function replaceAllRefs(schema: Record<string, any>) {
  // 使用递归遍历对象
  function findRefs(obj: Record<string, any>) {
    if (typeof obj !== 'object' || obj === null) return;
    // 检查当前对象是否有 $ref 属性
    if (obj['$ref']) {
      obj['$ref'] = replaceRef(obj['$ref']);
    }
    // 递归遍历子对象
    for (const key in obj) {
      const value = obj[key];
      if (typeof value === 'object') {
        findRefs(value);
      }
    }
  }
  findRefs(schema);
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
