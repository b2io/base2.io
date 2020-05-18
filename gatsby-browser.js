import wrapWithGlobalStyles from './wrap-with-global-styles';

export const onClientEntry = () => {
  if (!CustomEvent) {
    require('custom-event-polyfill');
  }
  if (!document.getElementsByTagName('html')[0].closest) {
    require('element-closest-polyfill');
  }
};

export const wrapRootElement = wrapWithGlobalStyles;
