import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import React, { Suspense } from "react"
import RelatedArticleListError from "./RelatedArticleList.error"
import RelatedArticleListLoading from "./RelatedArticleList.loading"
import RelatedArticleListView from "./RelatedArticleList.view"

type Props = {}

const RelatedArticleList: React.FC<Props> = () => {
  return (
    <ErrorBoundary fallback={<RelatedArticleListError />}>
      <Suspense fallback={<RelatedArticleListLoading />}>
        <RelatedArticleListView />
      </Suspense>
    </ErrorBoundary>
  )
}

export default RelatedArticleList
