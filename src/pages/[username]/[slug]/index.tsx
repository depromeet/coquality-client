import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Article from "@containers/Article"

const ArticlePage: NextPageWithLayout = () => {
  return <Article />
}

ArticlePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default ArticlePage
