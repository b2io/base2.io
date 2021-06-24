import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class CustomDocument extends Document {
  static async getInitialProps(
    context: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(context);

    return initialProps;
  }

  render(): JSX.Element {
    const { locale } = this.props;
    const lang = locale?.split('-')[0] ?? 'en';

    return (
      <Html lang={lang}>
        <Head>
          <link
            as="font"
            crossOrigin="anonymous"
            href="/RoobertGX.woff2"
            rel="preload"
          />
          <link
            as="font"
            crossOrigin="anonymous"
            href="/RoobertItalicGX.woff2"
            rel="preload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style global jsx>
            {`
              @font-face {
                font-display: swap;
                font-family: 'Roobert';
                font-style: normal;
                font-weight: 100 900;
                src: url(/RoobertGX.woff2) format('woff2-variations');
              }

              @font-face {
                font-display: swap;
                font-family: 'Roobert';
                font-style: italic;
                font-weight: 100 900;
                src: url(/RoobertItalicGX.woff2) format('woff2-variations');
              }

              :root {
                color-scheme: dark;
              }
            `}
          </style>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
