import PostList from "./PostList"
import PostListLoading from "./PostList.loading"
import PostListError from "./PostList.error"
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import { Suspense } from "react"

const PostListWrapper: React.FC = () => {
  return (
    <ErrorBoundary fallback={<PostListError />}>
      <Suspense fallback={<PostListLoading />}>
        <PostList />
      </Suspense>
    </ErrorBoundary>
  )
}

export default PostListWrapper
