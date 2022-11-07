import { ReactElement } from 'react'
import { NextPageWithLayout } from '@pages/_app'
import Layout from '@components/_base/Layout'
import Write from '@components/write'

const WritePage: NextPageWithLayout = () => {
  return <Write />
}

WritePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default WritePage
