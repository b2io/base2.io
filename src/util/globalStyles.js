import { createGlobalStyle } from 'styled-components';
import theme from '../theme';
import { mediaQuery } from './style';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    ${theme.font.sansSerif};
    margin: 0;
    padding: 0;
  }

  .noScroll > div {
    height: 100vh;
    overflow: hidden;

    ${mediaQuery.small`
      height: auto;
      overflow: auto;
    `};
  }
`;

export default GlobalStyles;
