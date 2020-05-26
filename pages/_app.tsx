import 'tailwind.css'
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="simplestart"
        description="A simple starting point for web applications"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;