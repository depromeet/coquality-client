import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ArticlePageContainer from "src/containers/ArticlePage"

const ArticlePage: NextPageWithLayout = () => {
  return <ArticlePageContainer />
}

ArticlePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default ArticlePage
