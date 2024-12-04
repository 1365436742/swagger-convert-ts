import { InputData, quicktype } from 'quicktype-core';
import prettier from 'prettier';

export const generatedCode = async (inputData: InputData) => {
  // 生成 TypeScript 代码
  const { lines } = await quicktype({
    inputData,
    rendererOptions: {
      'just-types': 'true', // 设置只生成类型
    },
    lang: 'typescript',
  });
  const tsCode = lines.join('\n');
  // 使用 Prettier 格式化代码
  const formattedCode = prettier.format(`namespace IApi{${tsCode}}`, {
    parser: 'typescript',
  });
  return formattedCode;
};
