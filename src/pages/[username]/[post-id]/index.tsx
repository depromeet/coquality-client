import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ArticleDetail from "@containers/ArticleDetail"

const ArticlePage: NextPageWithLayout = () => {
  return <ArticleDetail />
}

ArticlePage.getLayout = (page: ReactElement) => {
  return <Layout title="[article-title]">{page}</Layout>
}

export default ArticlePage
