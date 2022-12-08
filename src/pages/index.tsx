import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import FeedPageContainer from "@containers/FeedPage"

const FeedPage: NextPageWithLayout = () => {
  return <FeedPageContainer />
}

FeedPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default FeedPage
