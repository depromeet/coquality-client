import { Button } from "@components/inputs"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"
import UserAvatar from "./UserAvatar.svg"
import { useRouter } from "next/router"
import usersRepository from "@libs/api/users"
import { useQuery } from "@tanstack/react-query"

type Props = {}

const ProfileBoxView: React.FC<Props> = ({}) => {
  const router = useRouter()
  const userId = +`${router.query["username"]}`
  const { data } = useQuery(
    ["readUserInfo", { userId }],
    () => usersRepository.readUserInfo(userId),
    {
      enabled: !!userId,
    }
  )

  return (
    <StyledWrapper>
      <div className="profile">
        <UserAvatar />
      </div>
      <div className="nickname common-h3-sb">{data?.nickname}</div>
      <div className="bio common-h6-rg">{data?.userSummary}</div>
      <Button className="btn">팔로우</Button>
    </StyledWrapper>
  )
}

export default ProfileBoxView

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
