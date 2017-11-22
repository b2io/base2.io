import React from 'react';
import { injectGlobal, ThemeProvider } from 'styled-components';
import theme from '../theme';

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body,
  html {
    ${theme.typography.body1};
    color: ${theme.color.primary};
    margin: 0;
    padding: 0;
  }
`;

class Template extends React.Component {
  render() {
    return <ThemeProvider theme={theme}>{this.props.children()}</ThemeProvider>;
  }
}

export default Template;
