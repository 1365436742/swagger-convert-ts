import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import json from '@rollup/plugin-json'

const globals = {
  '@apidevtools/json-schema-ref-parser': '$RefParser',
  'json-schema-to-typescript': '$schemaToTs',
  superagent: '$superagent',
}

export default {
  input: 'plugin-src/index.ts', // 指定 TypeScript 入口文件
  output: [
    {
      file: 'dist/index.cjs.js',
      inlineDynamicImports: true,
      format: 'cjs', // CommonJS 格式
      globals,
    },
    {
      file: 'dist/index.esm.js',
      inlineDynamicImports: true,
      format: 'esm', // ES Module 格式
      globals,
    },
  ],
  external: [
    '@apidevtools/json-schema-ref-parser',
    'json-schema-to-typescript',
    'superagent',
  ],
  plugins: [
    del({ targets: 'dist/*' }), // 删除 dist 目录中的所有文件
    json(), // 使用 JSON 插件
    resolve({
      preferBuiltins: true,
    }), // 解析 Node.js 模块
    commonjs(), // 转换 CommonJS 模块为 ES6
    typescript({ tsconfig: './tsconfig.plugin.json' }), // 使用 TypeScript 插件
  ],
}
