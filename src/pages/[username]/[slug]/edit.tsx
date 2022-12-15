import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ArticleEdit from "@containers/ArticleEdit"

const ArticleEditPage: NextPageWithLayout = () => {
  return <ArticleEdit />
}

ArticleEditPage.getLayout = (page: ReactElement) => {
  return <Layout title="Edit">{page}</Layout>
}

export default ArticleEditPage
