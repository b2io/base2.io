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
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
