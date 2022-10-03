import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const NAVER_SITE_VERIFICATION = '';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html lang="ko">
        <Head>
          <meta name="naver-site-verification" content={NAVER_SITE_VERIFICATION} />
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;