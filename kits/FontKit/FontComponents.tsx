import { GoogleFontTagsProps } from 'kits/FontKit/FontTypes'

export function GoogleFontTags(props: GoogleFontTagsProps) {
  const { fontsUrl } = props 

  return (
    <>
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://images.ctfassets.net"
        crossOrigin="anonymous"
      />
      <link rel="preload" as="style" href={fontsUrl} />
      <link rel="stylesheet" href={fontsUrl} media="print" id="font" />
      <noscript>
        <link rel="stylesheet" href={fontsUrl} />
      </noscript>
    </>
  );
}
