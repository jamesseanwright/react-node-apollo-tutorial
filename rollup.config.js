'use strict';

const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('rollup-plugin-babel');
const getBabelConfig = require('./.babelrc.js');

const babelApi = {
  caller: cb => cb({ name: 'rollup' }),
};

module.exports = () => ({
  input: 'src/app/index.js',
  output: {
    dir: 'dist/app',
    format: 'esm',
  },
  plugins: [
    babel(getBabelConfig(babelApi)),
    commonjs(),
    resolve(),
  ],
  watch: {
    include: 'src/**/*.js',
  },
});
