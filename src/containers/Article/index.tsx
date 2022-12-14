import Button from "@components/inputs/Button"
import Tag from "@components/Tag"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"
import Comment from "./Comment"
import CommentForm from "./CommentForm"
import Hand from "./svgs/Hand.svg"
import Bookmark from "./svgs/Bookmark.svg"
import ShareBtn from "./svgs/ShareBtn.svg"
type Props = {}

const Article: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper className="common-container">
      <div className="lt">
        <div className="post-wrapper">
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam,
            minus. Labore voluptatum sit facilis nisi. Voluptas, nihil? Suscipit
            odio odit beatae earum aut accusantium consequuntur, provident ea
            laborum voluptates recusandae. Laboriosam modi fuga, ut dolorem
            temporibus natus expedita quis tempora perspiciatis maxime nemo
            officia? Eius doloremque, adipisci, voluptatem laboriosam
            architecto, a animi assumenda unde beatae reiciendis doloribus saepe
            distinctio at! Doloribus, esse, dolores officiis repellat soluta
            neque exercitationem ullam aut blanditiis autem, nam impedit. Illum
            laborum dolor consequatur ex? Natus tempora sed facere assumenda
            quia nulla veritatis fuga. Architecto, dignissimos! Delectus, totam
            eligendi deserunt commodi vero recusandae pariatur nostrum porro,
            impedit, rem distinctio alias atque rerum natus? Error, aut. Sint
            ratione delectus fuga nihil dignissimos reprehenderit atque placeat
            perspiciatis quisquam. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Veniam, minus. Labore voluptatum sit facilis nisi.
            Voluptas, nihil? Suscipit odio odit beatae earum aut accusantium
            consequuntur, provident ea laborum voluptates recusandae. Laboriosam
            modi fuga, ut dolorem temporibus natus expedita quis tempora
            perspiciatis maxime nemo officia? Eius doloremque, adipisci,
            voluptatem laboriosam architecto, a animi assumenda unde beatae
            reiciendis doloribus saepe distinctio at! Doloribus, esse, dolores
            officiis repellat soluta neque exercitationem ullam aut blanditiis
            autem, nam impedit. Illum laborum dolor consequatur ex? Natus
            tempora sed facere assumenda quia nulla veritatis fuga. Architecto,
            dignissimos! Delectus, totam eligendi deserunt commodi vero
            recusandae pariatur nostrum porro, impedit, rem distinctio alias
            atque rerum natus? Error, aut. Sint ratione delectus fuga nihil
            dignissimos reprehenderit atque placeat perspiciatis quisquam.
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
        </div>
        <div className="comment-wrapper">
          <div className="comment-header common-h6-rg">
            <b>20</b>개의 댓글
          </div>
          <CommentForm />
          <div className="comment-list">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
      <div className="rt">
        <div className="user-info">
          <div className="profile"></div>
          <div className="nickname common-h3-sb">미진</div>
          <div className="bio common-h6-rg">
            3년차 공유 모빌리티 서비스 UI/UX 기획자입니다 :)
          </div>
          <Button className="btn">팔로우</Button>
        </div>
        <div className="other-post-list">
          <div className="post">
            <div className="lt common-h5-sb">
              {`지금 연봉 10배가 오릅니다 : '네트워킹 드리븐' 으로 일하기`}
            </div>
            <div className="rt"></div>
          </div>
          <div className="post">
            <div className="lt common-h5-sb">
              {`지금 연봉 10배가 오릅니다 : '네트워킹 드리븐' 으로 일하기`}
            </div>
            <div className="rt"></div>
          </div>
          <div className="post">
            <div className="lt common-h5-sb">
              {`지금 연봉 10배가 오릅니다 : '네트워킹 드리븐' 으로 일하기`}
            </div>
            <div className="rt"></div>
          </div>
        </div>
        <div className="tool-bar">
          <div className="top">
            <div className="clap-btn">
              <Hand />
              <div className="common-h6-rg">999+</div>
            </div>
            <Bookmark />
          </div>
          <div className="bottom">
            <ShareBtn />
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Article

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 622px) minmax(0, 347px);
  justify-content: space-between;
  padding-top: 80px;
  .lt {
    .post-wrapper {
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
    }
    .comment-wrapper {
      display: flex;
      flex-direction: column;
      gap: 30px;
      .comment-header {
        padding-top: 20px;
      }
    }
  }
  .rt {
    .user-info {
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
    }
    .other-post-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 40px;
      .post {
        display: flex;
        gap: 16px;
        .rt {
          width: 80px;
          height: 80px;
          border-radius: 16px;
          flex-shrink: 0;
          background-color: ${colors.grey300};
        }
      }
    }
    .tool-bar {
      display: flex;
      flex-direction: column;
      gap: 9px;
      .top {
        width: fit-content;
        display: flex;
        flex-direction: column;
        background-color: ${colors.grey800};
        gap: 16px;
        border-radius: 100px;
        color: white;
        padding: 20px 12px;
        .clap-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }
`
