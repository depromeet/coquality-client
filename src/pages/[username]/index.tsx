import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ProfilePageContainer from "@containers/ProfilePage"

const ProfilePage: NextPageWithLayout = () => {
  return <ProfilePageContainer />
}

ProfilePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default ProfilePage
