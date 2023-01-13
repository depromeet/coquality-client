import React, { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"
import styled from "@emotion/styled"
import { colors } from "@constants/colors"
import WriterLevelChip from "./WriterLevelChip.svg"
import Button from "@components/inputs/Button"
import Dropdown from "@components/Dropdown"

import PostCard from "@components/PostCard"
import usersRepository, { IUser } from "@libs/api/users"
import postsRepository from "@libs/api/posts"
import followsRepository from "@libs/api/follows"
import { IPostType } from "@libs/api/posts"
import { useAuth } from "@hooks/useAuth"
import { useRouter } from "next/router"

type Props = {}

const Profile: React.FC<Props> = ({}) => {
  const router = useRouter()
  const { username } = router.query
  const auth = useAuth()

  const [myInfo, setMyInfo] = useState<IUser>()
  const [followersCount, setFollowersCount] = useState(0)
  const [followingsCount, setFollowingsCount] = useState(0)
  const [posts, setPosts] = useState<IPostType[]>([])

  useEffect(() => {
    if (username) {
      usersRepository
        .readUserInfo(parseInt(username as string), auth.token)
        .then((user) => {
          setMyInfo(user)
          Promise.all([
            followsRepository.getFollowerCount(
              user.userId.toString(),
              auth.token
            ),
            followsRepository.getFollowingCount(
              user.userId.toString(),
              auth.token
            ),
          ]).then(([followers, followings]) => {
            setFollowersCount(followers)
            setFollowingsCount(followings)
            postsRepository
              .getUserPosts(user.userId, "LATEST", auth.token, undefined)
              .then((posts) => {
                setPosts(posts)
              })
          })
        })
    }
  }, [username])

  // const auth = useAuth()

  // const { data: myInfo } = useQuery(
  //   ["userInfo"],
  //   () => usersRepository.readMyInfo(auth.token),
  //   {
  //     enabled: !!auth.token,
  //   }
  // )
  // const { data: myPosts } = useQuery(
  //   ["userPosts"],
  //   () => postsRepository.getMyPosts(undefined, auth.token),
  //   {
  //     enabled: !!auth.token,
  //   }
  // )
  // const { data: myFollowerCount } = useQuery(
  //   ["userFollowerCount"],
  //   () => followsRepository.getFollowerCount(auth.token),
  //   {
  //     enabled: !!auth.token,
  //   }
  // )
  // const { data: myFollowingCount } = useQuery(
  //   ["userFollowingCount"],
  //   () => followsRepository.getFollowingCount(auth.token),
  //   {
  //     enabled: !!auth.token,
  //   }
  // )

  return (
    <StyledWrapper className="common-container">
      <div className="profile-info">
        <div className="lt">
          <img className="lt" src={myInfo?.profileImageUrl}></img>
          <div className="rt">
            <div className="top">
              <div className="common-h1-sb">{myInfo?.nickname}</div>
              <div className="chip">
                <Link href={`/users/${myInfo?.userId}/grade`}>
                  <a>
                    <WriterLevelChip />
                  </a>
                </Link>
              </div>
            </div>
            <div className="mid common-h3-rg">{myInfo?.userSummary}</div>
            <div className="bottom common-h3-rg">
              <div>팔로워 {followersCount}</div>
              <div>팔로잉 {followingsCount}</div>
            </div>
          </div>
        </div>
        <div className="rt">
          {myInfo?.userId && (
            <Link href={`/users/${myInfo?.userId}/edit`}>
              <a>
                <Button className="btn">내 정보 수정</Button>
              </a>
            </Link>
          )}
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
            <div className="common-h3-rg">작성한 글</div>
            <div className="common-h3-rg">{posts?.length}</div>
          </div>
          <Dropdown />
        </div>
        <div className="post-list">
          {posts?.map((post: IPostType) => (
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
