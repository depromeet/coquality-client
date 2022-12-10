import React, { ButtonHTMLAttributes, ReactNode } from "react"
import styled from "@emotion/styled"
import { colors } from "@constants/colors"
import { css } from "@emotion/react"

const colorSet = {
  primary: {
    default: colors.primary600,
    hover: colors.primary600,
    disabled: colors.grey300,
  },
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  color?: "primary"
  variant?: "contained" | "outline"
}

const Button: React.FC<Props> = ({
  className,
  color = "primary",
  variant = "contained",
  children,
  ...props
}) => {
  return (
    <StyledWrapper
      className={["common-h5-sb", className].join(" ")}
      css={css`
        background-color: ${colors.primary500};
      `}
      {...props}
    >
      {children}
    </StyledWrapper>
  )
}

export default Button

const StyledWrapper = styled.button`
  background-color: ${colors.primary500};
  padding: 6px 30px;
  border-radius: 30px;
  gap: 5px;
  &:hover {
    background-color: ${colors.primary600};
  }
  &:disabled {
    color: ${colors.grey500};
    background-color: ${colors.grey300};
  }
`
