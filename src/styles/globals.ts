import { colors } from "@constants/colors"
import { css } from "@emotion/react"
import common from "./common"

export const globalStyles = css`
  html {
    font-family: Pretendard, Roboto, sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: ${colors.grey100};
  }
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    outline: none;
    color: inherit;
    cursor: pointer;
  }

  h1 {
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  h2 {
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  h3 {
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  h4 {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  h5 {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  h6 {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }

  ${common}
  button {
    border: 0;
    outline: 0;
  }
`
