import React, { Suspense } from "react"
import styled from "@emotion/styled"

import Dropdown from "@components/Dropdown"

import Tabs from "./Tabs"
import Banner from "./Banner"
import PostList from "./PostList/PostList"
import { PostListError, PostListLoading } from "./PostList"
import ErrorBoundary from "@components/ErrorBoundary/ErrorBoundary"

// TODO : 드롭다운 디자인 나오면 적용
// TODO : 전체 조회 쿼리 나오면 적용

type Props = {}

const tabsData = [
  { label: "전체", value: "all" },
  { label: "개발", value: "development" },
  { label: "디자인", value: "design" },
  { label: "기획/PM/PO", value: "pm" },
  { label: "광고/마케팅", value: "marketing" },
]

const Feed: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper className="common-container">
      <Banner />
      <div className="header common-h1-sb">당신을 위한 하이-퀄리티 글 👍🏻</div>
      <Tabs className="tabs" data={tabsData} initalValue={"development"} />
      <div className="filter">
        <Dropdown />
      </div>
      <ErrorBoundary fallback={<PostListError />}>
        <Suspense fallback={<PostListLoading />}>
          <PostList />
        </Suspense>
      </ErrorBoundary>
    </StyledWrapper>
  )
}

export default Feed

const StyledWrapper = styled.div`
  margin-top: 30px;

  .header {
    margin-top: 50px;
    margin-bottom: 52px;
  }
  .tabs {
    margin-bottom: 30px;
  }
  .filter {
    display: flex;
    justify-content: flex-end;
  }
`
