import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ProfileEdit from "@containers/ProfileEdit"

const ProfileEditPage: NextPageWithLayout = () => {
  return <ProfileEdit />
}

ProfileEditPage.getLayout = (page: ReactElement) => {
  return <Layout title="프로필 수정">{page}</Layout>
}

export default ProfileEditPage
