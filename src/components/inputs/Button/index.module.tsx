import { colors } from "@constants/colors"
import { css } from "@emotion/react"
import { ColorType, VariantType } from "./index.types"

export const getCss = (color: ColorType, variant: VariantType) => {
  switch (color) {
    case "primary":
      if (variant === "contained")
        return css`
          background-color: ${colors.primary500};
          &:hover {
            background-color: ${colors.primary600};
          }
          &:disabled {
            color: ${colors.grey500};
            background-color: ${colors.grey300};
          }
        `
      if (variant === "outline")
        return css`
          outline: 1px solid ${colors.grey800};
          &:disabled {
            color: ${colors.grey500};
            background-color: ${colors.grey300};
          }
        `
    default:
      return css``
  }
}
