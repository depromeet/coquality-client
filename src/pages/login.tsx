import { ReactElement } from 'react'
import { NextPageWithLayout } from '@pages/_app'
import Layout from '@components/_base/Layout'
import Login from '@components/login'

const LoginPage: NextPageWithLayout = () => {
  return <Login />
}

LoginPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default LoginPage
