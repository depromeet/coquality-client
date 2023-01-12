import useArticleQuery from "@containers/ArticleDetail/hooks/useArticleQuery"
import styled from "@emotion/styled"
import React from "react"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"

type Props = {}

const CommentBox: React.FC<Props> = ({}) => {
  const { data } = useArticleQuery()

  return (
    <StyledWrapper>
      <div className="comment-wrapper">
        <div className="comment-header common-h6-rg">
          <b>{data?.commentCount}</b>개의 댓글
        </div>
        <CommentForm />
        <CommentList />
      </div>
    </StyledWrapper>
  )
}

export default CommentBox

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  .comment-header {
    padding-top: 20px;
  }
`
