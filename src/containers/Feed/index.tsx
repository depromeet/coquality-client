import React from "react"
import styled from "@emotion/styled"

import Dropdown from "@components/Dropdown"

import Tabs from "./Tabs"
import Banner from "./Banner"
import PostList from "./PostList"
import { category } from "@constants/category"

// TODO : 드롭다운 디자인 나오면 적용
// TODO : 전체 조회 쿼리 나오면 적용

type Props = {}

const Feed: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper className="common-container">
      <Banner />
      <div className="header common-h1-sb">당신을 위한 하이-퀄리티 글 👍🏻</div>
      <Tabs className="tabs" data={category} initalValue={"all"} />
      <div className="filter">
        <Dropdown />
      </div>
      <PostList />
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
