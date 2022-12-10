import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import MyProfile from "@containers/MyProfile"

const MyProfilePage: NextPageWithLayout = () => {
  return <MyProfile />
}

MyProfilePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default MyProfilePage
