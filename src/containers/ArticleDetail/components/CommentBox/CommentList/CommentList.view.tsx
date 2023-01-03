import styled from "@emotion/styled"
import React from "react"
import Comment from "./Comment"

type Props = {}

const CommentListView: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </StyledWrapper>
  )
}

export default CommentListView

const StyledWrapper = styled.div``
