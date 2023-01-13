import styled from "@emotion/styled"
import { useAuth } from "@hooks/useAuth"
import React from "react"

import Article from "./components/Article"
import CommentBox from "./components/CommentBox"
import ProfileBox from "./components/ProfileBox"
import RelatedArticleList from "./components/RelatedArticleList"
import Toolbar from "./components/Toolbar"
type Props = {}

const ArticleDetail: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper className="common-container">
      <div className="lt">
        <Article />
        <CommentBox />
      </div>
      <div className="rt">
        <ProfileBox />
        <RelatedArticleList />
        <Toolbar />
      </div>
    </StyledWrapper>
  )
}

export default ArticleDetail

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 622px) minmax(0, 347px);
  justify-content: space-between;
  padding-top: 80px;
`
