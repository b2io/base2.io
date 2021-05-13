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
          <meta content="dark light" name="color-scheme" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                  font-display: swap;
                  font-family: 'Roobert';
                  font-style: normal;
                  font-weight: 1 999;
                  src: url(/RoobertGX.ttf) format('truetype');
                }
                @font-face {
                  font-display: swap;
                  font-family: 'Roobert';
                  font-style: italic;
                  font-weight: 1 999;
                  src: url(/RoobertItalicGX.ttf) format('truetype');
                }

                :root {
                  color-scheme: dark;
                }
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
