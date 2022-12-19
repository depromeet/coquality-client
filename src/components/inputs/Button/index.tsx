import {
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
} from "react"
import styled from "@emotion/styled"
import { colors } from "@constants/colors"
import { ColorType, VariantType } from "./index.types"
import { getCss } from "./index.module"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  color?: ColorType
  variant?: VariantType
}

const Button: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { className, color = "primary", variant = "contained", children, ...props },
  ref
) => {
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

export default forwardRef(Button)

const StyledWrapper = styled.button`
  padding: 0px 30px;
  height: 44px;
  border-radius: 30px;
  gap: 5px;
  &:disabled {
    color: ${colors.grey500};
  }
`
