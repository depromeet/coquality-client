import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ArticleDetail from "@containers/ArticleDetail"

const ArticlePage: NextPageWithLayout = () => {
  return <ArticleDetail />
}

ArticlePage.getLayout = (page: ReactElement) => {
  return <Layout title="게시글 상세">{page}</Layout>
}

export default ArticlePage
