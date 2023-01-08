import ProfileLoading from "./Profile.loading"
import ProfileError from "./Profile.error"
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import { Suspense } from "react"
import ProfileView from "./Profile.view"

const Profile: React.FC = () => {
  return (
    <ErrorBoundary fallback={<ProfileError />}>
      <Suspense fallback={<ProfileLoading />}>
        <ProfileView />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Profile
