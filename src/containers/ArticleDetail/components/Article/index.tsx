import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import React, { Suspense } from "react"
import ArticleError from "./Article.error"
import ArticleLoading from "./Article.loading"
import ArticleView from "./Article.view"

type Props = {}

const Article: React.FC<Props> = () => {
  return (
    <ErrorBoundary fallback={<ArticleError />}>
      <Suspense fallback={<ArticleLoading />}>
        <ArticleView />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Article
