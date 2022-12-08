import { ReactElement } from "react"
import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Edit from "@containers/ArticleEditPage"

const EditPage: NextPageWithLayout = () => {
  return <Edit />
}

EditPage.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default EditPage
