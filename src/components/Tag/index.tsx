import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React, { ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const Tag: React.FC<Props> = ({ children }) => {
  return <StyledWrapper>{children}</StyledWrapper>
}

export default Tag

const StyledWrapper = styled.div`
  color: ${colors.grey600};
  background-color: ${colors.primary300};
  border-radius: 4px;
  padding: 4px 12px;
`
