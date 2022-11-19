import { ReactElement } from 'react'
import { NextPageWithLayout } from '@pages/_app'
import Layout from '@components/_base/Layout' 
import Edit from '@components/mypage/edit'

const IndexPage: NextPageWithLayout = () => {
  return <Edit />
}

IndexPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default IndexPage
