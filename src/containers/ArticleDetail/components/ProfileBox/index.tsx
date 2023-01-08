import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import React, { Suspense } from "react"
import ProfileBoxError from "./ProfileBox.error"
import ProfileBoxLoading from "./ProfileBox.loading"
import ProfileBoxView from "./ProfileBox.view"

type Props = {}

const ProfileBox: React.FC<Props> = () => {
  return (
    <ErrorBoundary fallback={<ProfileBoxError />}>
      <Suspense fallback={<ProfileBoxLoading />}>
        <ProfileBoxView />
      </Suspense>
    </ErrorBoundary>
  )
}

export default ProfileBox
