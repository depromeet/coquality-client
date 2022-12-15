import React from "react"
import useUpload from "@hooks/useUpload"
import styled from "@emotion/styled"
import { colors } from "@constants/colors"
import Button from "@components/inputs/Button"
import Textfield from "@components/inputs/Textfield"
import Link from "next/link"

type Props = {}

const ProfileEdit: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper className="common-container">
      <div className="header common-h1-sb">프로필 수정</div>
      <div className="profile-info">
        <div className="lt"></div>
        <div className="rt">
          <Button className="img-btn upload-btn common-h5-sb">
            이미지 업로드
          </Button>
          <Button className="img-btn common-h5-sb" variant="outline">
            이미지 삭제
          </Button>
        </div>
      </div>
      <div className="inputs">
        <Textfield label="닉네임" placeholder="닉네임을 입력해주세요" />
        <Textfield label="이메일" placeholder="이메일을 입력해주세요" />
        <Textfield label="한 줄 소개" placeholder="한 줄 소개 입력해주세요" />
      </div>
      <div className="btns">
        <Link href={"/username"}>
          <Button className="submit-btn">수정완료</Button>
        </Link>
      </div>
    </StyledWrapper>
  )
}

export default ProfileEdit

const StyledWrapper = styled.div`
  padding-top: 48px;
  .header {
    margin-bottom: 48px;
  }
  .profile-info {
    display: flex;
    gap: 20px;
    margin-bottom: 80px;
    .lt {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: ${colors.grey400};
    }
    .rt {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .img-btn {
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .upload-btn {
        background-color: ${colors.grey300};
      }
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 110px;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    .submit-btn {
      padding: 10px 98px;
    }
  }
`
