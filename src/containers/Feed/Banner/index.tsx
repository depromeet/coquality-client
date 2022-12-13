import React from "react"

import Designer from "./svgs/Designer.svg"
import Marketor from "./svgs/Marketor.svg"
import DeleteButton from "./svgs/DeleteButton.svg"
import Button from "@components/inputs/Button"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import Link from "next/link"

// todo: Banner로 감싸기

type Props = {}

const Banner: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <Designer className="designer" />
      <Marketor className="marketor" />
      <DeleteButton className="btn" />
      <div className="content common-h3-sb">
        코컬리티에서 글쓰고 나의 커리어 퀄리티를 높여 봐요
      </div>
      <Link href={"/write"}>
        <Button className="write-btn">글 쓰러가기</Button>
      </Link>
    </StyledWrapper>
  )
}

export default Banner

const StyledWrapper = styled.div`
  position: relative;
  padding: 36px;
  background-color: black;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  .designer {
    position: absolute;
    left: 841.33px;
    top: 0px;
  }
  .marketor {
    position: absolute;
    left: 138px;
    top: 44px;
  }
  .btn {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
  .content {
    color: white;
  }
  .write-btn {
    background-color: ${colors.grey700};
    color: ${colors.primary400};
    padding: 6px 16px;
  }
`
