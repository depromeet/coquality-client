import { ReactElement } from 'react'
import { NextPageWithLayout } from '@pages/_app'
import Layout from '@components/_base/Layout'
import Edit from '@components/[username]/[slug]/edit'

const EditPage: NextPageWithLayout = () => {
  return <Edit />
}

EditPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default EditPage
