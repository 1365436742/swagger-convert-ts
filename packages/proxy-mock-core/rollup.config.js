import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import del from "rollup-plugin-delete"
import json from "@rollup/plugin-json"
export default {
    input: 'service/index.ts', // 指定 TypeScript 入口文件
    output: [
        {
            file: 'dist/index.cjs.js',
            format: 'cjs', // CommonJS 格式
        },
        {
            file: 'dist/index.js',
            format: 'esm', // ES Module 格式
        }
    ],
    plugins: [
        del({ targets: 'dist/*' }), // 删除 dist 目录中的所有文件
        json(),  // 使用 JSON 插件
        resolve({
            preferBuiltins: true
        }), // 解析 Node.js 模块
        commonjs(), // 转换 CommonJS 模块为 ES6
        typescript({ tsconfig: './tsconfig.service.json' }), // 使用 TypeScript 插件
    ]
};