import { css } from "@emotion/react"
import { mobile } from "./media"

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

  .common-h1-sb {
    font-size: 32px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  .common-h2-sb {
    font-size: 24px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  .common-h3-sb {
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  .common-h3-rg {
    font-size: 20px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 400;
  }
  .common-h4-sb {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  .common-h4-rg {
    font-size: 18px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 400;
  }
  .common-h5-sb {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -1%;
    font-weight: 600;
  }
  .common-h5-sb-spacing {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  .common-h5-rg {
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -1%;
    font-weight: 400;
  }
  .common-h6-sb {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 600;
  }
  .common-h6-rg {
    font-size: 14px;
    line-height: 150%;
    letter-spacing: 0%;
    font-weight: 400;
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
