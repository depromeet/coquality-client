import React from "react"
import { useQuery } from "@tanstack/react-query"
import Tag from "@components/Tag"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import postsRepository from "@libs/api/posts"
import { useRouter } from "next/router"
import { category } from "@constants/category"
import dynamic from "next/dynamic"
import { toStringByFormatting } from "@libs/utils/time"
import useArticleQuery from "@containers/ArticleDetail/hooks/useArticleQuery"

const ContentsViewer = dynamic(
  () => import("@containers/ArticleDetail/components/Article/ContentsViewer"),
  {
    ssr: false,
    loading: () => <>loading</>,
  }
)

// TODO: Tags
// TODO: 후원금
// TODO: contents 에디터 readonly
// TODO: username -> user-id
// TODO: 댓글 수

type Props = {}

const ArticleView: React.FC<Props> = ({}) => {
  const { data } = useArticleQuery()

  if (!data) return null

  const categoryLabel = category.find(
    (val) => val.value.toUpperCase() === data.primaryCategory
  )?.label

  const createdAt = toStringByFormatting(new Date(data.createdAt), ".")
  return (
    <StyledWrapper>
      <div className="post-header">
        <div className="lt common-h6-rg">{categoryLabel}</div>
        {/* <div className="rt common-h6-rg">누적 후원 ₩140,000</div> */}
      </div>
      <div className="post-info">
        <div className="title common-h1-sb">{data.title}</div>
        <div className="subtitle common-h3-rg">{data.summary}</div>
        <div className="footer common-h6-rg">
          <div>view {data.views}</div>
          <div>{createdAt}</div>
        </div>
      </div>
      <div className="post-content">
        <ContentsViewer initialValue={data.contents} />
      </div>
      <div className="tag-list">
        {data.tags.map((tag, idx) => (
          <Tag key={idx}>{tag}</Tag>
        ))}
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
