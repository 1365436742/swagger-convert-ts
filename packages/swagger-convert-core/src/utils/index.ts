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
  return tagsStr + capitalizeFirstLetter(operationId) + capitalizeFirstLetter(ext);
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
