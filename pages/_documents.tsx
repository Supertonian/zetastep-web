import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

const GOOGLE_ANALYTICS_4_ID = '';
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
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_4_ID}', {
                  page_path: window.location.pathname,
                });
              `,
                }}
              />
              <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
              <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
              <meta name="naver-site-verification" content={NAVER_SITE_VERIFICATION} />
            </>
          )}
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