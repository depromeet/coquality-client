import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"

type Props = {}

const RelatedArticleList: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
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
    </StyledWrapper>
  )
}

export default RelatedArticleList

const StyledWrapper = styled.div`
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
`
