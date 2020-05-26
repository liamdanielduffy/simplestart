import 'tailwind.css'
import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="simplestart"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;