import PostListLoading from "./PostList.loading"
import PostListError from "./PostList.error"
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import { Suspense } from "react"
import PostListView from "./PostList.view"

const PostList: React.FC = () => {
  return (
    <ErrorBoundary fallback={<PostListError />}>
      <Suspense fallback={<PostListLoading />}>
        <PostListView />
      </Suspense>
    </ErrorBoundary>
  )
}

export default PostList
