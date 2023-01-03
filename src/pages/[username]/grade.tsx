import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Grade from "@containers/Grade"

const GradePage: NextPageWithLayout = () => {
  return <Grade />
}

GradePage.getLayout = (page: ReactElement) => {
  return <Layout title="내 작가 등급">{page}</Layout>
}

export default GradePage
