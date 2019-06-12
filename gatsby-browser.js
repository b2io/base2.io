/* eslint-disable global-require */
exports.onClientEntry = () => {
  // Polyfills:
  require('whatwg-fetch');
  Object.assign = require('object-assign');
};
/* eslint-enable global-require */
