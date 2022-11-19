import dynamic from "next/dynamic"
import React from "react"

const ArticleEditor = dynamic(
  () => import("@components/_common/ArticleEditor"),
  {
    ssr: false,
  }
)

type Props = {}

const Write: React.FC<Props> = ({}) => {
  return (
    <div>
      <div>에디터 테스트</div>
      <ArticleEditor />
    </div>
  )
}

export default Write
