import { ReactElement } from 'react'
import { NextPageWithLayout } from '@pages/_app'
import Layout from '@components/_base/Layout'
import Mypage from '@components/mypage'

const IndexPage: NextPageWithLayout = () => {
  return <Mypage />
}

IndexPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default IndexPage
