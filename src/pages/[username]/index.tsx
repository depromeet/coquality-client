import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Profile from "@containers/Profile"

const ProfilePage: NextPageWithLayout = () => {
  return <Profile />
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <Layout title="[Username]">{page}</Layout>
}

export default ProfilePage
