import React from "react"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import styled from "@emotion/styled"
import { colors } from "@constants/colors"
import WriterLevelChip from "./WriterLevelChip.svg"
import Button from "@components/inputs/Button"
import Dropdown from "@components/Dropdown"

import PostCard from "@components/PostCard"
import usersRepository from "@libs/api/users"
import postsRepository from "@libs/api/posts"
import followsRepository from "@libs/api/follows"
import { IPostType } from "@libs/api/posts"
import { useAuthInjection } from "@hooks/useAuth"

type Props = {}

const Profile: React.FC<Props> = ({}) => {
  const authInjectedFollowsRepository = useAuthInjection(followsRepository)
  const authInjectedPostsRepository = useAuthInjection(postsRepository)
  const authInjectedUsersRepository = useAuthInjection(usersRepository)
  const { data: myInfo } = useQuery(["userInfo"], () =>
    authInjectedUsersRepository.readMyInfo()
  )
  const { data: myPosts } = useQuery(["userPosts"], () =>
    authInjectedPostsRepository.getMyPosts()
  )
  const { data: myFollowerCount } = useQuery(["userFollowerCount"], () =>
    authInjectedFollowsRepository.getFollowerCount()
  )
  const { data: myFollowingCount } = useQuery(["userFollowingCount"], () =>
    authInjectedFollowsRepository.getFollowingCount()
  )
  console.log(myInfo)
  return (
    <StyledWrapper className="common-container">
      <div className="profile-info">
        <div className="lt">
          <img className="lt" src={myInfo?.data?.profileImageUrl}></img>
          <div className="rt">
            <div className="top">
              <div className="common-h1-sb">{myInfo?.data?.nickname}</div>
              <div className="chip">
                <Link href="/username/grade">
                  <a>
                    <WriterLevelChip />
                  </a>
                </Link>
              </div>
            </div>
            <div className="mid common-h3-rg">{myInfo?.data?.userSummary}</div>
            <div className="bottom common-h3-rg">
              <div>팔로워 {myFollowerCount}</div>
              <div>팔로잉 {myFollowingCount}</div>
            </div>
          </div>
        </div>
        <div className="rt">
          <Link href={"/username/edit"}>
            <a>
              <Button className="btn">내 정보 수정</Button>
            </a>
          </Link>
        </div>
      </div>
      <div className="two-box">
        <div className="box">
          <div className="label">누적 박수 수 👏</div>
          <div className="value common-h2-sb">1,621개</div>
        </div>
        <div className="box">
          <div className="label">내가 받은 누적 후원금 💸 </div>
          <div className="value common-h2-sb">00,000,000원</div>
        </div>
      </div>
      <div className="my-article">
        <div className="header">
          <div className="lt">
            <div className="common-h3-rg">내 글</div>
            <div className="common-h3-rg">{myPosts?.length}</div>
          </div>
          <Dropdown />
        </div>
        <div className="post-list">
          {myPosts!.map((post: IPostType) => (
            <PostCard key={post.id} data={post} />
          ))}
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Profile

const StyledWrapper = styled.div`
  padding-top: 80px;
  .profile-info {
    display: flex;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 60px;
    > .lt {
      width: 100%;
      display: flex;
      gap: 30px;
      .lt {
        width: 176px;
        height: 176px;
        border-radius: 50%;
        background-color: ${colors.grey400};
        flex-shrink: 0;
      }
      .rt {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top {
          display: flex;
          align-items: center;
          gap: 10px;
          .chip {
            width: 112px;
            height: 42px;
          }
        }
        .mid {
          color: ${colors.grey500};
        }
        .bottom {
          display: flex;
          gap: 16px;
        }
      }
    }
    > .rt {
      display: flex;
      align-items: center;
      flex-shrink: 0;
      .btn {
        padding: 10px 86.5px;
      }
    }
  }
  .two-box {
    display: flex;
    gap: 20px;
    margin-bottom: 54px;
    .box {
      width: 100%;
      outline: 1px solid ${colors.grey400};
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 40px;
      align-items: center;
      border-radius: 10px;
      > * {
        width: fit-content;
      }
      .label {
        color: ${colors.grey500};
      }
      .value {
        color: ${colors.grey800};
      }
    }
  }
  .my-article {
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .lt {
        display: flex;
        gap: 10px;
      }
      .rt {
      }
    }
  }
`
