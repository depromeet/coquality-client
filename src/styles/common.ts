import { css } from '@emotion/react'
import { mobile } from './media'

/**
 * 공통으로 사용하는 css를 정의합니다. prefix로 common 을 붙이고 선언해 사용합니다.
 */
const commonStyles = css`
  .common-container {
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
  }
  .common-no-scroll {
    overflow: hidden;
  }
  .common-desktop-only {
    display: block;
  }
  .common-mobile-only {
    display: none;
  }
  ${mobile} {
    .common-desktop-only {
      display: none;
    }
    .common-mobile-only {
      display: block;
    }
  }
`

export default commonStyles
