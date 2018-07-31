import Document, { Head, Main, NextScript } from 'next/document'

export default class DefaultDocument extends Document {
  static async getInitialProps (ctx) {
    return await Document.getInitialProps(ctx)
  }

  render() {
    return (
      <html lang={this.props.__NEXT_DATA__.props.lang || 'en'}>
        <Head>
        </Head>
        <body>
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
