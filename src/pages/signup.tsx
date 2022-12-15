import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Signup from "@containers/Signup"

const SignupPage: NextPageWithLayout = () => {
  return <Signup />
}

SignupPage.getLayout = (page: ReactElement) => {
  return <Layout title="Signup">{page}</Layout>
}

export default SignupPage
