import styled from "@emotion/styled"
import React from "react"
import Comment from "./Comment"

type Props = {}

const CommentListError: React.FC<Props> = ({}) => {
  return <StyledWrapper>에러가 발생했습니다.</StyledWrapper>
}

export default CommentListError

const StyledWrapper = styled.div``
