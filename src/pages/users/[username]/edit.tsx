import { ReactElement, Suspense } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import ProfileEdit from "@containers/ProfileEdit"
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"

const ProfileEditPage: NextPageWithLayout = () => {
  return (
    <ErrorBoundary fallback={<>error</>}>
      <Suspense fallback={<>loading</>}>
        <ProfileEdit />
      </Suspense>
    </ErrorBoundary>
  )
}

ProfileEditPage.getLayout = (page: ReactElement) => {
  return <Layout title="프로필 수정">{page}</Layout>
}

export default ProfileEditPage
