import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ArticleWrite from "@containers/ArticleWrite"

const ArticleWritePage: NextPageWithLayout = () => {
  return <ArticleWrite />
}

ArticleWritePage.getLayout = (page: ReactElement) => {
  return <Layout title="Write">{page}</Layout>
}

export default ArticleWritePage
