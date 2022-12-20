import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"
import TrashIco from "./TrashIco.svg"

type Props = {}

const Comment: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <div className="lt"></div>
      <div className="rt">
        <div className="top common-h6-rg">
          <div className="lt">
            <div className="nickname">닉네임</div>
            <div className="date">2022.10.25</div>
          </div>
          <div className="rt ">
            <TrashIco />
            <div>삭제</div>
          </div>
        </div>
        <div className="mid common-h5-rg">
          정말 유익한 글이네요. 미진님의 글 잘 읽고 있습니다. 후원하고가요!
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Comment

const StyledWrapper = styled.div`
  padding: 25px 10px;
  display: flex;
  justify-content: space-between;
  gap: 11px;
  border-bottom: 1px solid ${colors.grey300};
  > .lt {
    width: 32px;
    height: 32px;
    background-color: ${colors.grey300};
    border-radius: 50%;
  }
  > .rt {
    width: 100%;
    > .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 32px;
      gap: 12px;
      margin-bottom: 4px;
      .lt {
        width: 100%;
        display: flex;
        gap: 12px;
        .nickname {
          color: ${colors.grey600};
        }
        .date {
          color: ${colors.grey400};
        }
      }
      .rt {
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${colors.grey400};
        flex-shrink: 0;
      }
    }
    > .mid {
      margin-bottom: 10px;
    }
  }
`
