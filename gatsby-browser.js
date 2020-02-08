import wrapWithGlobalStyles from './wrap-with-global-styles';

export const onClientEntry = () => {
  // Polyfills:
  require('whatwg-fetch');
  Object.assign = require('object-assign');
};

export const wrapRootElement = wrapWithGlobalStyles;
