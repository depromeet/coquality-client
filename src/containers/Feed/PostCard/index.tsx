import Tag from "@components/Tag"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"
import DefaultImg from "./DefaultImg.svg"
import MessageIcon from "./MessageIcon.svg"
import ViewIcon from "./ViewIcon.svg"

type Props = {}

const PostCard: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <div className="lt">
        <div className="top">
          <a className="title common-h2-sb">프로젝트 관리를 위한 JIRA 활용기</a>
          <div className="sub-title common-h4-rg">
            신규 프로젝트를 효과적으로 관리하기 위한 애자일 도구인 JIRA의 사용
            경험에 대해 소개합니다.
          </div>
        </div>
        <div className="bottom">
          <div className="tag-list">
            <Tag>Tag</Tag>
            <Tag>Tag</Tag>
            <Tag>Tag</Tag>
          </div>
          <div className="footer common-h6-rg">
            <div className="lt">Jay | 2022.11.05</div>
            <div className="rt">
              <div className="count">
                <ViewIcon />
                356
              </div>
              <div className="count">
                <MessageIcon />
                51
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rt">
        <DefaultImg />
      </div>
    </StyledWrapper>
  )
}

export default PostCard

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 45px 0 40px;
  .lt {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    .top {
      .title {
        margin-bottom: 8px;
      }
      .sub-title {
        color: ${colors.grey500};
      }
    }
    .bottom {
      .tag-list {
        display: flex;
        gap: 8px;
        margin-bottom: 20px;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        .lt {
          color: ${colors.grey500};
        }
        .rt {
          display: flex;
          align-items: center;
          gap: 16px;
          .count {
            display: flex;
            align-items: center;
            gap: 5px;
            color: ${colors.grey500};
          }
        }
      }
    }
  }
`
