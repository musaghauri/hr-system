// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// Converse JS - XMPP chat client:
// <link rel="stylesheet" type="text/css" media="screen" href="https://cdn.conversejs.org/4.1.0/css/converse.min.css" />

// ./pages/_document.js
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, height=device-height, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
            rel="stylesheet"
          />
          <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
            rel="stylesheet"
          />

          {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />

          <script src="/assets/js/core/jquery.min.js" />
          <script src="/assets/js/core/popper.min.js" />
          <script src="/assets/js/core/bootstrap.min.js" />
          <script src="/assets/js/plugins/perfect-scrollbar.jquery.min.js" />

          {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE" /> */}

          <script src="/assets/js/plugins/chartjs.min.js" />

          <script src="/assets/js/plugins/bootstrap-notify.js" />
          <script
            src="/assets/js/paper-dashboard.min.js?v=2.0.0"
            type="text/javascript"
          />
          <script src="/assets/demo/demo.js" />
          {/* <script>
            $(document).ready(function(){' '}
            {// Javascript method's body can be found in assets/assets-for-demo/js/demo.js
            demo.initChartsPages()}
            );
          </script> */}
        </body>
      </html>
    );
  }
}
