import Helmet from 'react-helmet';
import BaseDocument, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class Document extends BaseDocument {
  static async getInitialProps(...args) {
    const props = await super.getInitialProps(...args);

    return { ...props, helmet: Helmet.renderStatic() };
  }

  render() {
    const { helmet } = this.props;
    const sheet = new ServerStyleSheet();
    const mainEl = sheet.collectStyles(<Main />);
    const styleEls = sheet.getStyleElement();

    return (
      <html lang="en" {...helmet.htmlAttributes.toComponent()}>
        <Head>
          <Helmet title="Base Two" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:100,400,900" rel="stylesheet" />
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
          {styleEls}
        </Head>
        <body {...helmet.bodyAttributes.toComponent()}>
          {mainEl}
          <NextScript />
        </body>
      </html>
    );
  }
}

export default Document;
