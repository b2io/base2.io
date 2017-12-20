import PropTypes from 'prop-types';
import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from '../theme';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    ${theme.font.sansSerif};
    background: ${theme.color.base};
    color: ${theme.color.text};
    margin: 0;
    padding: 0;
  }
`;

class Template extends React.Component {
  static defaultPropes = {};

  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  render() {
    return <ThemeProvider theme={theme}>{this.props.children()}</ThemeProvider>;
  }
}

export default Template;
