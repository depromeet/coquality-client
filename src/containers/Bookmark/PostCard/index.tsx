import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"
import DeleteIco from "./DeleteIco.svg"
type Props = {}

const PostCard: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <div className="top">
        <div className="lt">
          <div className="title common-h4-sb">
            쿠팡 로켓배송의 가치는 어떻게 측정할 수 있을까?
          </div>
          <div className="subtitle common-h6-rg">Jay | 2022.11.05</div>
        </div>
        <div className="rt"></div>
      </div>
      <div className="mid common-h5-rg">
        기술은 항상 변화하고 있고 여러분의 프로세스와 관행은 이러한 변화를
        따라잡아야 합니다. npm이 출시된 지 12년이 되었지만, npm 패키지 생성에
        대한 당신의 관행은 훨씬 더 현대적이기를 바랍니다.
      </div>
      <div className="bottom">
        <div className="btn common-h6-rg">
          <DeleteIco />
          <div>삭제</div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default PostCard

const StyledWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  .top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .lt {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .subtitle {
        color: ${colors.grey400};
      }
    }
    .rt {
      width: 72px;
      height: 72px;
      border-radius: 10px;
      flex-shrink: 0;
      background-color: ${colors.grey300};
    }
  }
  .mid {
    padding: 12px 16px;
    border-radius: 10px;
    background-color: ${colors.grey200};
    margin-bottom: 20px;
  }
  .bottom {
    display: flex;
    justify-content: flex-end;
    .btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      color: ${colors.grey400};
    }
  }
`
