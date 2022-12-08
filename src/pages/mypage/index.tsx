import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import MypageContainer from "@containers/MyPage"

const MyPage: NextPageWithLayout = () => {
  return <MypageContainer />
}

MyPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default MyPage
