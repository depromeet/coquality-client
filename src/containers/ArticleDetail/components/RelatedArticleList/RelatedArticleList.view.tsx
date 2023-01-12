import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/router"
import postsRepository, {
  PostPrimaryCategoryType,
  PostSortType,
} from "@libs/api/posts"
import React, { useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import DefaultImg from "./DefaultImg.svg"
import { useAuth } from "@hooks/useAuth"

type Props = {}

const RelatedArticleListView: React.FC<Props> = ({}) => {
  const router = useRouter()
  const auth = useAuth()

  const currentSort = useMemo<PostSortType>(() => {
    return `${router.query.sort || `VIEWS`}`.toUpperCase() as PostSortType
  }, [router])

  const currentCategory = useMemo<PostPrimaryCategoryType | undefined>(() => {
    if (!router.query.tab || router.query.tab === "all") return undefined
    return `${router.query.tab}`.toUpperCase() as PostPrimaryCategoryType
  }, [router])

  const userId = +`${router.query["username"]}`

  const { data } = useQuery(
    ["getUserPosts", { userId }],
    () =>
      postsRepository.getUserPosts(
        userId,
        currentSort,
        auth.token,
        currentCategory
      ),
    {
      enabled: !!userId,
    }
  )

  if (data?.length === 0) return null
  return (
    <StyledWrapper>
      {data?.slice(0, 3)?.map((el, idx) => (
        <div className="post" key={idx}>
          <Link href={`/${el.userId}/${el.id}`}>
            <a className="lt common-h5-sb">{el.title}</a>
          </Link>
          <div className="rt">
            {el.thumbnail ? (
              <Image src={el.thumbnail} width={80} height={80} alt="" />
            ) : (
              <DefaultImg />
            )}
          </div>
        </div>
      ))}
    </StyledWrapper>
  )
}

export default RelatedArticleListView

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
  .post {
    display: flex;
    gap: 16px;
    .lt {
      width: 100%;
    }
    .rt {
      overflow: hidden;
      width: 80px;
      height: 80px;
      border-radius: 16px;
      flex-shrink: 0;
      background-color: ${colors.grey300};
    }
  }
`
