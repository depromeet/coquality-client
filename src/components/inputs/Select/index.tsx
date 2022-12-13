import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React, { SelectHTMLAttributes } from "react"
import Down from "./Down.svg"
interface IFProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const Select: React.FC<IFProps> = ({ className, children, ...props }) => {
  return (
    <StyledWrapper className={className}>
      <select className="common-h5-sb" {...props}>
        {children}
      </select>
      <div className="icon">
        <Down />
      </div>
    </StyledWrapper>
  )
}

export default Select

const StyledWrapper = styled.div<{}>`
  position: relative;
  display: inline-block;
  background-color: white;
  width: 100%;
  select {
    border: none;
    background-color: transparent;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    padding: 12px;
    width: 100%;
  }

  border: 1px solid ${colors.grey400};
  border-radius: 8px;
  font-size: 14px;
  .icon {
    top: 50%;
    transform: translateY(-50%);
    bottom: 0;
    right: 12px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    svg {
      font-size: 10px;
    }
  }
`
