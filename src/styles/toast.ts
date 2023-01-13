import { colors } from "@constants/colors"
import { css } from "@emotion/react"

export const toastCss = css`
  .toastui-editor-defaultUI {
    border: none;
    border-top: 1px solid #dadde6;
  }
  .toastui-editor-ww-container {
    background-color: transparent;
  }
  .toastui-editor-contents {
    padding-left: 0;
    padding-right: 0;
    p {
      color: ${colors.grey600};
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0%;
      font-weight: 400;
    }
  }
`
