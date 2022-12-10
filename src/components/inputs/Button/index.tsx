import React, { ButtonHTMLAttributes, ReactNode } from "react"
import styled from "@emotion/styled"
import { colors } from "@constants/colors"
import { css } from "@emotion/react"
import { ColorType, VariantType } from "./index.types"
import { getCss } from "./index.module"

const colorSet = {
  primary: {
    default: colors.primary600,
    hover: colors.primary600,
    disabled: colors.grey300,
  },
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  color?: ColorType
  variant?: VariantType
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
      css={getCss(color, variant)}
      {...props}
    >
      {children}
    </StyledWrapper>
  )
}

export default Button

const StyledWrapper = styled.button`
  padding: 0px 30px;
  height: 44px;
  border-radius: 30px;
  gap: 5px;
  &:disabled {
    color: ${colors.grey500};
  }
`
