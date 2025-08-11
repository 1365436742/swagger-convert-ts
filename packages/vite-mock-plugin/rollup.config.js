import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import json from '@rollup/plugin-json'

const globals = {
  '@apidevtools/json-schema-ref-parser': '$RefParser',
  'json-schema-to-typescript': '$schemaToTs',
  'quicktype-core': '$quicktypeCore',
  superagent: '$superagent',
}

// 修正 external 配置
const external = [...Object.keys(globals), 'path', 'fs', 'url']

export default [
  // CommonJS 版本
  {
    input: 'plugin-src/index.ts',
    output: {
      file: 'dist/index.cjs',
      inlineDynamicImports: true,
      format: 'cjs',
      globals,
    },
    external,
    plugins: [
      del({ targets: 'dist/*' }),
      json(),
      resolve({ preferBuiltins: true }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.plugin.json' }),
    ],
  },
  // ESM 版本 - 注入 __dirname
  {
    input: 'plugin-src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      inlineDynamicImports: true,
      format: 'esm',
      globals,
      banner: `
import { fileURLToPath as fileURLToPathBanner } from 'url';
import { dirname as dirnameBanner } from 'path';
const __filename = fileURLToPathBanner(import.meta.url);
const __dirname = dirnameBanner(__filename);
      `.trim(),
    },
    external,
    plugins: [
      json(),
      resolve({ preferBuiltins: true }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.plugin.json' }),
    ],
  },
]
