import PropTypes from 'prop-types';
import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme, { darkTheme, lightTheme } from '../theme';
import { mediaQuery } from '../util/style';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
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

const POST_REGEX = /\d{4}\/\d{2}\/\d{2}/;

const isBlogPage = location =>
  location.pathname.indexOf('blog') > -1 || location.pathname.match(POST_REGEX);

class Template extends React.Component {
  static defaultPropes = {};

  static propTypes = {
    children: PropTypes.func.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    const pageTheme = isBlogPage(this.props.location) ? lightTheme : darkTheme;

    return (
      <ThemeProvider theme={pageTheme}>{this.props.children()}</ThemeProvider>
    );
  }
}

export default Template;
