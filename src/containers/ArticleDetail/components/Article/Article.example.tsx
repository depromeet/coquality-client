import { useQuery } from "@tanstack/react-query"
import Tag from "@components/Tag"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import postsRepository from "@libs/api/posts"
import { useRouter } from "next/router"
import React from "react"
import { useAuth } from "@hooks/useAuth"
type Props = {}

const ArticleView: React.FC<Props> = ({}) => {
  const router = useRouter()
  const auth = useAuth()

  const userId = +`${router.query["user-id"]}`
  const postId = +`${router.query["post-id"]}`

  const { data } = useQuery(
    ["getPostById", { postId, userId }],
    () => postsRepository.getPostById(postId, { userId }, auth.token),
    {}
  )

  return (
    <StyledWrapper>
      <div className="post-header">
        <div className="lt common-h6-rg">디자인</div>
        <div className="rt common-h6-rg">누적 후원 ₩140,000</div>
      </div>
      <div className="post-info">
        <div className="title common-h1-sb">
          {`지금 연봉 10배가 오릅니다 : '네트워킹 드리븐'으로 일하기`}
        </div>
        <div className="subtitle common-h3-rg">
          인지심리학자가 UX 용어 첫 사용, 그 이유는?
        </div>
        <div className="footer common-h6-rg">
          <div>view 356</div>
          <div>2022.10.25</div>
        </div>
      </div>
      <div className="post-content">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, minus.
        Labore voluptatum sit facilis nisi. Voluptas, nihil? Suscipit odio odit
        beatae earum aut accusantium consequuntur, provident ea laborum
        voluptates recusandae. Laboriosam modi fuga, ut dolorem temporibus natus
        expedita quis tempora perspiciatis maxime nemo officia? Eius doloremque,
        adipisci, voluptatem laboriosam architecto, a animi assumenda unde
        beatae reiciendis doloribus saepe distinctio at! Doloribus, esse,
        dolores officiis repellat soluta neque exercitationem ullam aut
        blanditiis autem, nam impedit. Illum laborum dolor consequatur ex? Natus
        tempora sed facere assumenda quia nulla veritatis fuga. Architecto,
        dignissimos! Delectus, totam eligendi deserunt commodi vero recusandae
        pariatur nostrum porro, impedit, rem distinctio alias atque rerum natus?
        Error, aut. Sint ratione delectus fuga nihil dignissimos reprehenderit
        atque placeat perspiciatis quisquam. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Veniam, minus. Labore voluptatum sit
        facilis nisi. Voluptas, nihil? Suscipit odio odit beatae earum aut
        accusantium consequuntur, provident ea laborum voluptates recusandae.
        Laboriosam modi fuga, ut dolorem temporibus natus expedita quis tempora
        perspiciatis maxime nemo officia? Eius doloremque, adipisci, voluptatem
        laboriosam architecto, a animi assumenda unde beatae reiciendis
        doloribus saepe distinctio at! Doloribus, esse, dolores officiis
        repellat soluta neque exercitationem ullam aut blanditiis autem, nam
        impedit. Illum laborum dolor consequatur ex? Natus tempora sed facere
        assumenda quia nulla veritatis fuga. Architecto, dignissimos! Delectus,
        totam eligendi deserunt commodi vero recusandae pariatur nostrum porro,
        impedit, rem distinctio alias atque rerum natus? Error, aut. Sint
        ratione delectus fuga nihil dignissimos reprehenderit atque placeat
        perspiciatis quisquam.
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
