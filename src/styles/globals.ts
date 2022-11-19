import { css } from '@emotion/react'
import common from './common'

/**
 * 초기 세팅을 위한 css를 정의합니다.
 */
export const globalStyles = css`
  html {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
  }
  body {
    padding: 0;
    margin: 0;
    background-color: #f9f9f9;
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

  h1,
  h2,
  h3,
  h4 {
    font-weight: 500;
  }

  ${common}
  button {
    border: 0;
    outline: 0;
  }
`
