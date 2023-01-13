import React from "react"
import ToolbarView from "."
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"
import { Suspense } from "react"

type Props = {}

const Toolbar: React.FC<Props> = ({}) => {
  return (
    <ErrorBoundary fallback={<></>}>
      <Suspense fallback={<></>}>
        <ToolbarView />
      </Suspense>
    </ErrorBoundary>
  )
}

export default Toolbar
