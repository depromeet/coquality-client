import Tag from "@components/Tag"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"
type Props = {}

const ArticleLoading: React.FC<Props> = ({}) => {
  return <StyledWrapper className="common-container">loading</StyledWrapper>
}

export default ArticleLoading

const StyledWrapper = styled.div``
