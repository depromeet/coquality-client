import { colors } from "@constants/colors"
import styled from "@emotion/styled"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  padding: 45px 0 40px;
  border-bottom: 1px solid ${colors.grey300};
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

export default StyledWrapper