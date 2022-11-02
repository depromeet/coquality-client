import { css } from '@emotion/react'
import common from './common'

/**
 * 초기 세팅을 위한 css를 정의합니다.
 */
export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  html {
  }

  body {
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
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
