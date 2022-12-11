import React from "react"
import styled from "@emotion/styled"
import Tabs from "./Tabs"
import FilterIcon from "./svgs/FilterIcon.svg"
import PostCard from "./PostCard"
import Banner from "./Banner"

type Props = {}

const tabsData = [
  { label: "전체", value: "all" },
  { label: "개발", value: "develop" },
  { label: "디자인", value: "design" },
  { label: "기획/PM/PO", value: "pm" },
  { label: "광고/마케팅", value: "marketing" },
]

const Feed: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper className="common-container">
      <Banner />
      <div className="header common-h1-sb">당신을 위한 하이-퀄리티 글 👍🏻</div>
      <Tabs className="tabs" data={tabsData} initalValue={"all"} />
      <div className="filter">
        <div className="filter-dropdown">
          <FilterIcon />
          <div>조회순</div>
        </div>
      </div>
      <div className="post-list">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
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
    .filter-dropdown {
      cursor: pointer;
      width: 100px;
      height: 36px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
`
