import curry from 'lodash/curry';
import get from 'lodash/get';
import supportsWebP from 'supports-webp';
import { lighten as _lighten } from 'polished';
import { css } from 'styled-components';

const cssCond = predicate => (...args) => props =>
  predicate(props) ? css(...args) : undefined;

const cssEvery = (...keys) => (...args) => props =>
  keys.every(key => !!props[key]) ? css(...args) : undefined;

const cssSome = (...keys) => (...args) => props =>
  keys.some(key => !!props[key]) ? css(...args) : undefined;

const lighten = curry(_lighten);

const mq = (target, ...conditions) => (...args) => css`
  @media ${target} and ${conditions.map(c => `(${c})`).join(' and ')} {
    ${css(...args)};
  }
`;

const mediaQuery = {
  xsmall: mq('screen', 'max-width: 480px'),
  small: mq('screen', 'min-width: 481px'),
  smedium: mq('screen', 'min-width: 767px'),
  medium: mq('screen', 'min-width: 1025px'),
  large: mq('screen', 'min-width: 1281px'),
  xlarge: mq('screen', 'min-width: 1921px'),
};

const containerSizing = css`
  padding-left: 5%;
  padding-right: 5%;

  ${mediaQuery.medium`
    padding-left: 2em;
    padding-right: 2em;
  `};

  ${mediaQuery.large`
    padding-left: 100px;
    padding-right: 100px;
  `};
`;

const webpBackground = (original, optimized) => {
  const supportedImage = supportsWebP ? optimized : original;
  const backgroundCss = css`
    background-image: url(${supportedImage});
  `;
  return backgroundCss;
};

const themed = curry((path, props) => get(props.theme, path));

export {
  containerSizing,
  cssCond,
  cssEvery,
  cssSome,
  lighten,
  mediaQuery,
  themed,
  webpBackground,
};
