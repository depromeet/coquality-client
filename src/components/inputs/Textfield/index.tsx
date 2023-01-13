import { colors } from "@constants/colors"
import styled from "@emotion/styled"

import React, {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  ReactNode,
} from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: Exclude<ReactNode, boolean | null | undefined>
  error?: string
  hint?: string
  focus?: boolean
}

const Textfield: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { className, label, hint, error, focus = true, ...props },
  ref
) => {
  return (
    <StyledWrapper className={className}>
      {label && <div className="label common-h6-sb">{label}</div>}
      <input
        ref={ref}
        type="text"
        spellCheck="false"
        autoComplete="off"
        data-focus={focus}
        data-error={!!error}
        {...props}
      />
      {hint && <div className="hint">{hint}</div>}
      {error && <div className="error">{error}</div>}
    </StyledWrapper>
  )
}

export default forwardRef(Textfield)

const StyledWrapper = styled.div`
  .label {
  }
  .hint,
  .error {
    font-weight: 400;
    margin-top: 5px;
    font-size: 12px;
    &.hint {
    }
    &.error {
    }
  }
  input {
    width: 100%;
    border: none;
    outline: none;
    border-bottom: 1px solid ${colors.grey400};
    padding: 12px 0px;
    display: flex;
    align-items: center;
    background-color: transparent;
    &[data-focus="true"] {
    }
    &[data-error="true"] {
    }
  }
`
