import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ProfileEditPageContainer from "@containers/ProfileEditPage"

const ProfileEditPage: NextPageWithLayout = () => {
  return <ProfileEditPageContainer />
}

ProfileEditPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default ProfileEditPage
