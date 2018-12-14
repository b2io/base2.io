import curry from 'lodash/curry';
import get from 'lodash/get';
import { lighten as _lighten, rem } from 'polished';
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
  medium: mq('screen', 'min-width: 961px'),
  large: mq('screen', 'min-width: 1281px'),
  xlarge: mq('screen', 'min-width: 1921px'),
};

const containerSizing = css`
  margin: 0 auto;
  max-width: ${rem('1440px')};
  padding: 0 5%;

  ${mediaQuery.medium`
    padding: 0 ${rem('64px')};
  `};

  ${mediaQuery.large`
    padding: 0 ${rem('96px')};
  `};
`;

const themed = curry((path, props) => get(props.theme, path));

export {
  containerSizing,
  cssCond,
  cssEvery,
  cssSome,
  lighten,
  mediaQuery,
  themed,
};
