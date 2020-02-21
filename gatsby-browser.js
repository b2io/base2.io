/* eslint-disable global-require */
exports.onClientEntry = () => {
  // Polyfills:
  require('intersection-observer');
  require('whatwg-fetch');
  Object.assign = require('object-assign');
};
/* eslint-enable global-require */
