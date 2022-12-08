import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import LoginPageContainer from "@containers/LoginPage"

const LoginPage: NextPageWithLayout = () => {
  return <LoginPageContainer />
}

LoginPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default LoginPage
