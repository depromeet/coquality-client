import BookmarkLoading from "./Bookmark.loading"
import BookmarkError from "./Bookmark.error"
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import { Suspense } from "react"
import BookmarkView from "./Bookmark.view"

const Bookmark: React.FC = () => {
  return (
    <ErrorBoundary fallback={<BookmarkError />}>
      <Suspense fallback={<BookmarkLoading />}>
        <BookmarkView />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Bookmark
