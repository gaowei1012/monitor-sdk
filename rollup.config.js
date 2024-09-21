import path, { format } from 'path'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import rollupTypescipt from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const env = process.env.NODE_NEV
const name = 'RolupMonitorSDK'

const config = {
  input: path.resolve(__dirname, 'packages/index.ts'),
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    },
    {
      name,
      file: pkg.umd,
      format: 'umd'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    rollupTypescipt(),
    babel({
      // 编译库使用
      babelHelpers: 'runtime',
      // 只转换源代码，不转换外部依赖
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: [...DEFAULT_EXTENSIONS, '.ts']
    })
  ]
}

if (env == 'prod') {
  config.plugins.push(
    terser({
      compress: {
        pure_funcs: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config