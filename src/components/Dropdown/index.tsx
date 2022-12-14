import styled from "@emotion/styled"
import React from "react"
import FilterIcon from "./FilterIcon.svg"

type Props = {}

const Dropdown: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper>
      <FilterIcon />
      <div>조회순</div>
    </StyledWrapper>
  )
}

export default Dropdown

const StyledWrapper = styled.div`
  cursor: pointer;
  width: 100px;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 6px;
`
