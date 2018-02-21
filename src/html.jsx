import PropTypes from 'prop-types';
import React from 'react';

const isProduction = process.env.NODE_ENV === 'production';

let stylesStr;
if (isProduction) {
  try {
    // eslint-disable-next-line global-require, import/no-webpack-loader-syntax, import/no-unresolved
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  }
}

class Html extends React.Component {
  static defaultProps = {
    body: null,
    bodyAttributes: {},
    headComponents: null,
    htmlAttributes: {},
    postBodyComponents: null,
    preBodyComponents: null,
  };

  static propTypes = {
    body: PropTypes.node,
    bodyAttributes: PropTypes.shape({}),
    headComponents: PropTypes.node,
    htmlAttributes: PropTypes.shape({}),
    postBodyComponents: PropTypes.node,
    preBodyComponents: PropTypes.node,
  };

  render() {
    /* eslint-disable react/no-danger */
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
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,400,500"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Anonymous+Pro"
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
    /* eslint-enable react/no-danger */
  }
}

module.exports = Html;
