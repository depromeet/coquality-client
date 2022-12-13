import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React, { HTMLAttributes, ReactNode } from "react"

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
}

const Tag: React.FC<Props> = ({ className, children, ...props }) => {
  return (
    <StyledWrapper className={className} {...props}>
      {children}
    </StyledWrapper>
  )
}

export default Tag

const StyledWrapper = styled.div`
  color: ${colors.grey600};
  background-color: ${colors.primary300};
  border-radius: 4px;
  padding: 4px 12px;
`
