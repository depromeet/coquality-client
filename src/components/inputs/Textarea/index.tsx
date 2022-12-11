import styled from "@emotion/styled"
import React, { TextareaHTMLAttributes } from "react"

interface IFProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
}

const Textarea: React.FC<IFProps> = ({ className, children, ...props }) => {
  return (
    <StyledWrapper
      className={className}
      rows={3}
      autoComplete="off"
      {...props}
    />
  )
}

export default Textarea

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
