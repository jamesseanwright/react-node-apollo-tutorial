'use strict';

const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('rollup-plugin-babel');
const nodeGlobals = require('rollup-plugin-node-globals');
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
    resolve({
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    babel(getBabelConfig(babelApi)),
    nodeGlobals(),
  ],
  watch: {
    include: 'src/**/*.js',
  },
});
