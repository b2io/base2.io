/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { darkTheme } from './src/theme';
import { GlobalStyles } from './wrap-with-global-styles';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  // React Context in SSR/build
  const ConnectedBody = () => (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      {bodyComponent}
    </ThemeProvider>
  );
  replaceBodyHTMLString(renderToString(<ConnectedBody />));

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(sheet.collectStyles(<ConnectedBody />));
    const styleElement = sheet.getStyleElement();
    setHeadComponents(styleElement);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  } finally {
    sheet.seal();
  }
};

export default {};
