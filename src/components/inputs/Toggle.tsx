import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
} from "react"

import styled from "@emotion/styled"
import { colors } from "@constants/colors"

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: Exclude<ReactNode, boolean | null | undefined>
  error?: string
}

const Toggle: ForwardRefRenderFunction<HTMLInputElement, ToggleProps> = (
  { className, label, ...props },
  ref
) => {
  return (
    <StyledWrapper className={className}>
      {label && <label className="label">{label}</label>}
      <input ref={ref} type="checkbox" {...props} />
    </StyledWrapper>
  )
}

export default forwardRef(Toggle)

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  input[type="checkbox"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    height: 26px;
    outline: none;
    display: inline-block;
    vertical-align: top;
    position: relative;
    margin: 0;
    cursor: pointer;
    background-color: ${colors.grey300};
    width: 46px;
    border-radius: 50px;
    transition: background-color 0.3s;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 3px;
      top: 3px;
      border-radius: 50px;
      width: 20px;
      height: 20px;
      background: white;
      transition: transform 0.3s cubic-bezier(0.2, 0.85, 0.32, 1);
    }
    &:checked {
      background-color: ${colors.primary500};
      &:after {
        transform: translateX(100%);
      }
    }
    &:disabled {
      &:not(:checked) {
        &:after {
          opacity: 0.6;
        }
      }
    }
  }
`
