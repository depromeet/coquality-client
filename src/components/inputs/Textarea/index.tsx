import styled from "@emotion/styled"
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from "react"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, Props> = (
  { rows = 3, children, ...props },
  ref
) => {
  return <StyledWrapper ref={ref} rows={rows} autoComplete="off" {...props} />
}

export default forwardRef(Textarea)

const StyledWrapper = styled.textarea`
  font-family: inherit;
  letter-spacing: inherit;
  width: 100%;
  outline: none;
  border: none;
  flex-shrink: 1;
  background-color: transparent;
  border-radius: 5px;
  resize: none;
  &[disabled] {
    /* color: #999999;
    background-color: #eeeeee; */
  }
`
