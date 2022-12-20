import Button from "@components/inputs/Button"
import Textarea from "@components/inputs/Textarea"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"

import AmazedButton from "./svgs/AmazedButton.svg"
import CuriousButton from "./svgs/CuriousButton.svg"
import FrightenedButton from "./svgs/FrightenedButton.svg"
import GoodButton from "./svgs/GoodButton.svg"
import LoveButton from "./svgs/LoveButton.svg"

type Props = {}

const CommentForm: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <Textarea
        className="input common-h5-rg"
        placeholder="댓글 작성이 어렵다면 간단한 이모티콘으로 글에 대한 생각을 표현해보세요!"
      />
      <div className="footer">
        <div className="lt">
          <GoodButton className="emoji-btn" />
          <LoveButton className="emoji-btn" />
          <AmazedButton className="emoji-btn" />
          <CuriousButton className="emoji-btn" />
          <FrightenedButton className="emoji-btn" />
        </div>
        <div className="rt">
          <Button className="submit-btn common-h6-sb" variant="outline">
            작성완료
          </Button>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default CommentForm

const StyledWrapper = styled.div`
  background-color: ${colors.grey200};
  padding: 20px;
  border-radius: 12px;
  .input {
    margin-bottom: 20px;
  }
  .footer {
    border-top: 1px solid ${colors.grey400};
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    align-items: center;

    .lt {
      display: flex;
      gap: 7px;
      .emoji-btn {
        width: 42px;
        height: 42px;
        cursor: pointer;
      }
    }
    .rt {
      .submit-btn {
        padding: 8px 16px;
        height: fit-content;
      }
    }
  }
`
