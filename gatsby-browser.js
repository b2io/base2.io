import wrapWithGlobalStyles from './wrap-with-global-styles';

export const onClientEntry = () => {
  // Polyfills:
  require('whatwg-fetch');
  require('./src/util/prism-languages');
  Object.assign = require('object-assign');
};

export const wrapRootElement = wrapWithGlobalStyles;
