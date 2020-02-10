import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme } from './src/theme';
import { mediaQuery } from './src/util/style';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    ${darkTheme.font.sansSerif};
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

// eslint-disable-next-line react/prop-types
export default ({ element }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
