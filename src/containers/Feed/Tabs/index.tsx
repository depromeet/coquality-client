import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"

export type TabType = {
  label: string
  value: string
}

type TProps = {
  className?: string
  data: TabType[]
  initalValue?: string
}

const Tabs: React.FC<TProps> = ({ className, data, initalValue }) => {
  const router = useRouter()

  const selectedTabValue = router.query.tab || initalValue

  return (
    <StyledWrapper className={className}>
      {data.map((tab, idx) => (
        <Link
          key={idx}
          href={{
            query: {
              ...router.query,
              tab: tab.value,
            },
          }}
        >
          <a
            className="tab common-h3-rg"
            data-active={selectedTabValue === tab.value}
          >
            {tab.label}
          </a>
        </Link>
      ))}
    </StyledWrapper>
  )
}

export default Tabs

const StyledWrapper = styled.div`
  .tab {
    position: relative;
    padding: 10px 16px;
    color: ${colors.grey500};
    &[data-active="true"] {
      color: black;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: black;
      }
    }
  }
`
