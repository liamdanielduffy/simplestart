import 'tailwind.css'
import { DefaultSeo } from "next-seo";
import { useNonBlockingFontLoad } from 'kits/FontKit/FontHooks'

function MyApp({ Component, pageProps }) {

  useNonBlockingFontLoad()

  return (
    <>
      <DefaultSeo
        title="simple-start-static"
        description="A simple starting point for static websites"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;