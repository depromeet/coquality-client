import { NextPage } from "next"
import type { AppProps } from "next/app"
import { ReactElement, ReactNode, useState } from "react"
import { Global } from "@emotion/react"
import { globalStyles } from "@styles/globals"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ChakraProvider } from "@chakra-ui/react"
import "@toast-ui/editor/dist/toastui-editor.css" // Editor's Style
import { theme } from "@libs/chakra/theme"

export type NextPageWithLayout<PageProps = {}> = NextPage<PageProps> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const queryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const [queryClient] = useState(() => new QueryClient(queryClientConfig))
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Global styles={globalStyles} />
        <ChakraProvider theme={theme}>
          {getLayout(<Component {...pageProps} />)}
        </ChakraProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
