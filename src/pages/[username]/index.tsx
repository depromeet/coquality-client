import { ReactElement } from 'react'
import { NextPageWithLayout } from '@pages/_app'
import Index from '@components/index'
import Layout from '@components/_base/Layout'

const UsernamePage: NextPageWithLayout = () => {
  return <Index />
}

UsernamePage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default UsernamePage
