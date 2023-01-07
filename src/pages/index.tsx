import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Feed from "@containers/Feed"

const FeedPage: NextPageWithLayout = () => {
  return <Feed />
}

FeedPage.getLayout = (page: ReactElement) => {
  return <Layout title="피드">{page}</Layout>
}

export default FeedPage
