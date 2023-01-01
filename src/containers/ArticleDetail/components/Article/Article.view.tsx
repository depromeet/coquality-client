import React from "react"
import { useQuery } from "@tanstack/react-query"
import Tag from "@components/Tag"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import postsRepository from "@libs/api/posts"
import { useRouter } from "next/router"
import { category } from "@constants/category"
import dynamic from "next/dynamic"

const ArticleEditor = dynamic(
  () => import("@components/inputs/ArticleEditor"),
  {
    ssr: false,
    loading: () => <></>,
  }
)

// TODO: formatting createdAt
// TODO: Tags
// TODO: 후원금
// TODO: contents 에디터 readonly
// TODO: username -> user-id

type Props = {}

const ArticleView: React.FC<Props> = ({}) => {
  const router = useRouter()

  const userId = +`${router.query["username"]}`
  const postId = +`${router.query["post-id"]}`

  const { data } = useQuery(
    ["getPostById", { postId, userId }],
    () => postsRepository.getPostById(postId, { userId }),
    {
      enabled: !!(userId && postId),
    }
  )

  if (!data) return null

  const categoryLabel = category.find(
    (val) => val.value.toUpperCase() === data.primaryCategory
  )?.label

  return (
    <StyledWrapper>
      <div className="post-header">
        <div className="lt common-h6-rg">{categoryLabel}</div>
        <div className="rt common-h6-rg">누적 후원 ₩140,000</div>
      </div>
      <div className="post-info">
        <div className="title common-h1-sb">{data.title}</div>
        <div className="subtitle common-h3-rg">{data.summary}</div>
        <div className="footer common-h6-rg">
          <div>view {data.views}</div>
          <div>{data.createdAt}</div>
        </div>
      </div>
      <div className="post-content">
        <ArticleEditor defaultValue={data.contents} />
      </div>
      <div className="tag-list">
        <Tag>JIRA</Tag>
        <Tag>스프린트</Tag>
        <Tag>애자일</Tag>
        <Tag>Tag</Tag>
        <Tag>스프린트</Tag>
        <Tag>애자일</Tag>
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
        <Tag>Tag</Tag>
      </div>
    </StyledWrapper>
  )
}

export default ArticleView

const StyledWrapper = styled.div`
  .post-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .lt {
      color: ${colors.grey600};
    }
    .rt {
      color: ${colors.grey500};
      padding: 8px 10px;
      outline: 1px solid ${colors.grey500};
      border-radius: 4px;
    }
  }
  .post-info {
    .title {
    }
    .subtitle {
      padding: 16px 0;
    }
    .footer {
      display: flex;
      padding: 12px 0;
      gap: 10px;
      color: ${colors.grey500};
    }
    border-bottom: 1px solid ${colors.grey300};
  }
  .post-content {
    padding: 80px 0;
  }
  .tag-list {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    padding-bottom: 70px;
    border-bottom: 1px solid ${colors.grey300};
  }
`
