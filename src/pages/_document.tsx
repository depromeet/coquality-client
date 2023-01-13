import { Head, Html, Main, NextScript } from "next/document"
import Script from "next/script"

function Document() {
  return (
    <Html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
        />
        <Script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.js"
          integrity="sha384-OfbOqPoV2XcfZpqrLgqYCNSNBJW4JU/lLrtKk0cpkWvCrDRotHaQ9SSMGeP7u8NB"
          crossOrigin="anonymous"
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="onboard-modal"></div>
      </body>
    </Html>
  )
}

export default Document
