import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ProfileEdit from "@containers/ProfileEdit"

const ProfileEditPage: NextPageWithLayout = () => {
  return <ProfileEdit />
}

ProfileEditPage.getLayout = (page: ReactElement) => {
  return <Layout title="Edit">{page}</Layout>
}

export default ProfileEditPage
