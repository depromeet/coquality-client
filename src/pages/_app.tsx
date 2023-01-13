import { NextPage } from "next"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode, useEffect, useState } from "react"
import { Global } from "@emotion/react"
import { AlertDescription, ChakraProvider } from "@chakra-ui/react"
import {
  QueryClient,
  QueryClientProvider,
  QueryClientConfig,
} from "@tanstack/react-query"

import { globalStyles } from "@styles/globals"
import { theme } from "@libs/chakra/theme"
import "@toast-ui/editor/dist/toastui-editor.css"
import { AuthProvider } from "@hooks/useAuth"
import Script from "next/script"

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      suspense: true,
      useErrorBoundary: true,
    },
  },
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.js"
        integrity="sha384-OfbOqPoV2XcfZpqrLgqYCNSNBJW4JU/lLrtKk0cpkWvCrDRotHaQ9SSMGeP7u8NB"
        crossOrigin="anonymous"
      />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Global styles={globalStyles} />
          <ChakraProvider theme={theme}>
            {getLayout(<Component {...pageProps} />)}
          </ChakraProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
