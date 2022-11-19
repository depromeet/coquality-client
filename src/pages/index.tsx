import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/_base/Layout"
import Index from "@components/index"

const IndexPage: NextPageWithLayout = () => {
  return <Index />
}

IndexPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default IndexPage
