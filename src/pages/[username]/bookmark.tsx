import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Bookmark from "@containers/Bookmark"

const BookmarkPage: NextPageWithLayout = () => {
  return <Bookmark />
}

BookmarkPage.getLayout = (page: ReactElement) => {
  return <Layout title="Bookmark">{page}</Layout>
}

export default BookmarkPage
