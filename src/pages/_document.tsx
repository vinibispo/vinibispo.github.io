import Document, { Head, Html, Main, NextScript} from 'next/document'
export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700" rel="stylesheet" />
        </Head>
        <body className="leading-normal tracking-normal gradient" style={{fontFamily: 'Source Sans Pro, sans-serif'}} >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
