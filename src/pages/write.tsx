import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ArticleWritePageContainer from "@containers/ArticleWritePage"

const ArticleWritePage: NextPageWithLayout = () => {
  return <ArticleWritePageContainer />
}

ArticleWritePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default ArticleWritePage
