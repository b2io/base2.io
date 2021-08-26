const path = require('path');

const toPath = (p) => path.join(process.cwd(), p);

module.exports = {
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '~': toPath('src/'),
          '@emotion/styled': toPath('node_modules/@emotion/styled'),
        },
      },
    };
  },
};
