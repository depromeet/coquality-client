import styled from "@emotion/styled"
import React from "react"
import Comment from "./Comment"

type Props = {}

const CommentListLoading: React.FC<Props> = ({}) => {
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

export default CommentListLoading

const StyledWrapper = styled.div``
