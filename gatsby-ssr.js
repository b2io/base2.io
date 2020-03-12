/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { darkTheme } from './src/theme';
import WrapWithGlobalStyles from './wrap-with-global-styles';
import './src/util/prism-languages';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  replaceBodyHTMLString(
    renderToString(<WrapWithGlobalStyles element={bodyComponent} />),
  );

  // Add styled-components in SSR/build
  const sheet = new ServerStyleSheet();
  try {
    const html = renderToString(
      sheet.collectStyles(<WrapWithGlobalStyles element={bodyComponent} />),
    );
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
