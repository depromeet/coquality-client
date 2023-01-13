import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ArticleEdit from "@containers/ArticleEdit"

const ArticleEditPage: NextPageWithLayout = () => {
  return <ArticleEdit />
}

ArticleEditPage.getLayout = (page: ReactElement) => {
  return <Layout title="게시글 수정">{page}</Layout>
}

export default ArticleEditPage
