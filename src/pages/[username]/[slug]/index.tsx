import { ReactElement } from 'react'
import { NextPageWithLayout } from '@pages/_app'
import Layout from '@components/_base/Layout'
import Slug from '@components/[username]/[slug]'

const SlugPage: NextPageWithLayout = () => {
  return <Slug />
}

SlugPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default SlugPage
