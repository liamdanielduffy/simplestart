import { useEffect } from 'react'
import document from 'global/document'

export function useNonBlockingFontLoad() {
  useEffect(() => {
    if (document) {
      let fontTag: any = document.getElementById("font") ?? {};
      fontTag.media = "all";
    }
  }, [document]);
}
