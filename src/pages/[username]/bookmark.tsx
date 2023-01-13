import { ReactElement } from "react"

import { NextPageWithLayout } from "@pages/_app"
import Layout from "@components/Layout"
import Bookmark from "@containers/Bookmark/Bookmark.view"

const BookmarkPage: NextPageWithLayout = () => {
  return <Bookmark />
}

BookmarkPage.getLayout = (page: ReactElement) => {
  return <Layout title="저장한 글">{page}</Layout>
}

export default BookmarkPage
