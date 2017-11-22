import React from 'react';
import { ServerStyleSheet } from 'styled-components';

const isProduction = process.env.NODE_ENV === 'production';

let stylesStr;
if (isProduction) {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.error(e);
  }
}

class Html extends React.Component {
  render() {
    const {
      body,
      bodyAttributes,
      headComponents,
      htmlAttributes,
      postBodyComponents,
      preBodyComponents,
    } = this.props;

    let css;
    if (isProduction) {
      css = (
        <style
          dangerouslySetInnerHTML={{ __html: stylesStr }}
          id="gatsby-inlined-css"
        />
      );
    }

    return (
      <html lang="en" {...htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link
            href="/img/apple-touch-icon.png"
            rel="apple-touch-icon"
            sizes="180x180"
          />
          <link
            href="/img/favicon-32x32.png"
            rel="icon"
            sizes="32x32"
            type="image/png"
          />
          <link
            href="/img/favicon-16x16.png"
            rel="icon"
            sizes="16x16"
            type="image/png"
          />
          <link
            color="#5bbad5"
            href="/img/safari-pinned-tab.svg"
            rel="mask-icon"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500"
            rel="stylesheet"
          />
          <title>Base Two</title>
          {headComponents}
          {css}
        </head>
        <body {...bodyAttributes}>
          {preBodyComponents}
          <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
          {postBodyComponents}
        </body>
      </html>
    );
  }
}

module.exports = Html;
