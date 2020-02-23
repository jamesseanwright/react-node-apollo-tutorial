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
    babel(getBabelConfig(babelApi)),
    nodeGlobals(),
    commonjs({
      namedExports: {
        'node_modules/react-dom/index.js': ['render'],
        'node_modules/react/index.js': [
          'Component',
          'PropTypes',
          'Fragment',
          'Suspense',
          'createElement',
          'useEffect',
          'useState',
          'useContext',
          'createContext',
          'lazy',
        ],
      },
    }),
    resolve(),
  ],
  watch: {
    include: 'src/**/*.js',
  },
});
