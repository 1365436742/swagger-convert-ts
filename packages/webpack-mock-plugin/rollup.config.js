const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const typescript = require('@rollup/plugin-typescript')
const del = require('rollup-plugin-delete')
const json = require('@rollup/plugin-json') // 引入 JSON 插件
const globals = {
  '@apidevtools/json-schema-ref-parser': '$RefParser',
  'json-schema-to-typescript': '$schemaToTs',
  'quicktype-core': '$quicktypeCore',
  superagent: '$superagent',
}
module.exports = {
  input: 'src/index.ts', // 指定 TypeScript 入口文件
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
  external: Object.keys(globals),
  plugins: [
    del({ targets: 'dist/*' }), // 删除 dist 目录中的所有文件
    json(), // 使用 JSON 插件
    resolve({
      preferBuiltins: true,
    }), // 解析 Node.js 模块
    commonjs(), // 转换 CommonJS 模块为 ES6
    typescript({ tsconfig: './tsconfig.json' }), // 使用 TypeScript 插件
  ],
}
