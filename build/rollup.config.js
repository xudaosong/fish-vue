const buble = require('rollup-plugin-buble')
const replace = require('rollup-plugin-replace')
const version = process.env.VERSION || require('../package.json').version

module.exports = {
  entry: 'src/index.js',
  dest: 'dist/fish-vue.js',
  format: 'umd',
  moduleName: 'fish-vue',
  plugins: [
    replace({ __VERSION__: version }),
    buble()
  ],
  banner:
`/**
 * fish-vue v${version}
 * (c) ${new Date().getFullYear()} Evan You
 * @license MIT
 */`
}
