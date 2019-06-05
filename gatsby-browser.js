exports.onClientEntry = async () => {
  // Polyfills:
  if (typeof fetch === 'undefined') {
    await import('whatwg-fetch');
  }
  if (typeof Object.assign === 'undefined') {
    Object.assign = await import('object-assign');
  }
};
