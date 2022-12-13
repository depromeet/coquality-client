import React, {
  ChangeEventHandler,
  FormEventHandler,
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
  useState,
} from "react"
import styled from "@emotion/styled"

import Tag from "@components/Tag"
import { colors } from "@constants/colors"

export const generateFormEvent = (name: string, value: string | any[]) => {
  const event: any = {
    target: {
      name: name,
      value: value,
    },
  }
  return event
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: Exclude<ReactNode, boolean | null | undefined>
  hint?: string
  error?: string
  wrap?: boolean
  onChange?: any
  value?: string[]
}

const Tags: React.FC<Props> = ({
  className,
  label,
  hint,
  error,
  wrap = false,
  name,
  value,
  onChange = () => {},
  ...props
}) => {
  const [tagValue, setTagValue] = useState<Set<string>>(new Set(value))
  const [inputValue, setInputValue] = useState<string>("")
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
  }

  const addTag = (value: string) => {
    if (value.trim() === "") return
    const newTagValue = new Set([...Array.from(tagValue)])
    newTagValue.add(value)
    setTagValue(newTagValue)
    onChange(generateFormEvent(name!, [...Array.from(newTagValue)]))
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    addTag(inputValue)
    setInputValue("")
  }

  const deleteTag = (value: string) => {
    if (props.disabled) return
    const newTagValue = new Set([...Array.from(tagValue)])
    newTagValue.delete(value)
    setTagValue(newTagValue)
    onChange(generateFormEvent(name!, [...Array.from(newTagValue)]))
  }

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    switch (e.key) {
      case "Backspace":
        if (inputValue === "") {
          const tagArr = Array.from(tagValue)
          deleteTag(tagArr[tagArr.length - 1])
        }
        return
    }
  }

  return (
    <StyledWrapper className={className} data-wrap={wrap}>
      {label && <div className="label">{label}</div>}
      <form className="input-wrapper" onSubmit={handleSubmit}>
        {Array.from(tagValue).map((tag, idx) => (
          <Tag
            key={idx}
            className="tag common-h6-rg"
            onClick={() => deleteTag(tag)}
          >
            {tag}
          </Tag>
        ))}
        <input
          type="text"
          spellCheck="false"
          autoComplete="off"
          placeholder={
            props.disabled ? `` : `태그를 입력하고 Enter를 입력하세요`
          }
          value={inputValue}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          {...props}
        />
      </form>
      {hint && <div className="hint">{hint}</div>}
      {error && <div className="error">{error}</div>}
    </StyledWrapper>
  )
}

export default Tags

const StyledWrapper = styled.div`
  .label {
    margin-bottom: 10px;
    font-size: 14px;
  }
  .error,
  .hint {
    font-weight: 400;
    margin-top: 5px;
    font-size: 12px;
  }
  .input-wrapper {
    border-radius: 8px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 5px;
    overflow-x: scroll;
    background-color: white;
    border: 1px solid ${colors.grey300};
    &::-webkit-scrollbar {
      display: none;
    }
    &:focus-within {
    }
    input {
      border: none;
      outline: none;
      background-color: transparent;
      display: flex;
      align-items: center;
      min-width: 100px;
      flex-grow: 1;
    }
    .tag {
      cursor: pointer;
    }
  }
  .input-wrapper {
    flex-wrap: "wrap";
  }
  &[data-wrap="false"] {
    .input-wrapper {
      flex-wrap: "nowrap";
    }
  }
`
