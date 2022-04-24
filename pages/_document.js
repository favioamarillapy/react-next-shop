import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  static async loadGetInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}


export default MyDocument