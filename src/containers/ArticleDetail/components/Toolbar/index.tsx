import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"

import Hand from "./svgs/Hand.svg"
import Bookmark from "./svgs/Bookmark.svg"
import ShareBtn from "./svgs/ShareBtn.svg"

type Props = {}

const Toolbar: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <div className="top">
        <div className="clap-btn">
          <Hand />
          <div className="common-h6-rg">999+</div>
        </div>
        <Bookmark />
      </div>
      <div className="bottom">
        <ShareBtn />
      </div>
    </StyledWrapper>
  )
}

export default Toolbar

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  .top {
    width: fit-content;
    display: flex;
    flex-direction: column;
    background-color: ${colors.grey800};
    gap: 16px;
    border-radius: 100px;
    color: white;
    padding: 20px 12px;
    .clap-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
