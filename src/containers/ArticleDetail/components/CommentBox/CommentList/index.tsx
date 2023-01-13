import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import React, { Suspense } from "react"
import CommentListError from "./CommentList.error"
import CommentListLoading from "./CommentList.loading"
import CommentListView from "./CommentList.view"

type Props = {}

const CommentList: React.FC<Props> = () => {
  return (
    <ErrorBoundary fallback={<CommentListError />}>
      <Suspense fallback={<CommentListLoading />}>
        <CommentListView />
      </Suspense>
    </ErrorBoundary>
  )
}

export default CommentList
