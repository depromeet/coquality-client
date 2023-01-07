import styled from "@emotion/styled"
import React, {
  forwardRef,
  ForwardRefRenderFunction,
  TextareaHTMLAttributes,
} from "react"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea: ForwardRefRenderFunction<HTMLTextAreaElement, Props> = (
  { className, children, ...props },
  ref
) => {
  return (
    <StyledWrapper
      ref={ref}
      className={className}
      rows={3}
      autoComplete="off"
      {...props}
    />
  )
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
