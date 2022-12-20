import { Button } from "@components/inputs"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"

type Props = {}

const ProfileBox: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <div className="profile"></div>
      <div className="nickname common-h3-sb">미진</div>
      <div className="bio common-h6-rg">
        3년차 공유 모빌리티 서비스 UI/UX 기획자입니다 :)
      </div>
      <Button className="btn">팔로우</Button>
    </StyledWrapper>
  )
}

export default ProfileBox

const StyledWrapper = styled.div`
  margin-bottom: 40px;
  .profile {
    width: 77px;
    height: 77px;
    border-radius: 50%;
    background-color: ${colors.grey300};
    margin-bottom: 16px;
  }
  .nickname,
  .bio {
    padding: 0 10px;
  }
  .bio {
    margin-bottom: 16px;
  }
  .btn {
    padding: 10px 84px;
  }
`
