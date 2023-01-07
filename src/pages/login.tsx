import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Login from "@containers/Login"

const LoginPage: NextPageWithLayout = () => {
  return <Login />
}

LoginPage.getLayout = (page: ReactElement) => {
  return <Layout title="로그인">{page}</Layout>
}

export default LoginPage
