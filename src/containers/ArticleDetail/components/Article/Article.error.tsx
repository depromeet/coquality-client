import styled from "@emotion/styled"
import React from "react"
type Props = {}

const ArticleError: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper className="common-container">
      게시글 조회 오류 발생
    </StyledWrapper>
  )
}

export default ArticleError

const StyledWrapper = styled.div``
