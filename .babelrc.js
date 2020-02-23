'use strict';

const nodePresets = [
  [
    '@babel/preset-env',
    {
      targets: {
        node: '12',
      },
    },
  ],
];

const browserPresets = [
  '@babel/preset-react',
  [
    '@babel/preset-env',
    {
      targets: {
        chrome: '77',
        firefox: '69',
      },
    },
  ],
];

const isBrowser = ({ name }) => name === 'rollup';

module.exports = api => ({
  presets: api.caller(isBrowser) ? browserPresets : nodePresets,
});
