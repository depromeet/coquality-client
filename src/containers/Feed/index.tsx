import React from "react"
import styled from "@emotion/styled"
import Button from "@components/inputs/Button"
import { colors } from "@constants/colors"
import Tabs from "./Tabs"
import DeleteButton from "./svgs/DeleteButton.svg"
import FilterIcon from "./svgs/FilterIcon.svg"
import PostCard from "./PostCard"

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
      <div className="banner">
        <DeleteButton className="btn" />
        <div className="content common-h3-sb">
          코컬리티에서 글쓰고 나의 커리어 퀄리티를 높여 봐요
        </div>
        <Button className="write-btn">글 쓰러가기</Button>
      </div>
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
  .banner {
    position: relative;
    padding: 36px;
    background-color: ${colors.grey800};
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    .btn {
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }
    .content {
      color: white;
    }
    .write-btn {
      background-color: ${colors.grey700};
      color: ${colors.primary400};
      padding: 6px 16px;
    }
  }
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
