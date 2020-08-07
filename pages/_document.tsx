import Document, { Html, Head, Main, NextScript } from "next/document";
import { GoogleFontTags } from 'kits/FontKit/FontComponents'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <GoogleFontTags fontsUrl="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
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
