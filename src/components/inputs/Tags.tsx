import React, {
  ChangeEventHandler,
  FormEventHandler,
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  KeyboardEventHandler,
  ReactNode,
  useState,
} from "react"
import styled from "@emotion/styled"

import Tag from "@components/Tag"
import { colors } from "@constants/colors"
import { generateOnChangeEvent } from "@libs/utils"
import { ChangeHandler } from "react-hook-form"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: Exclude<ReactNode, boolean | null | undefined>
  hint?: string
  error?: string

  name?: string
  defaultValue?: string[]
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
}

const Tags: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  {
    className,
    label,
    hint,
    error,
    name,
    defaultValue,
    onChange,
    onBlur,
    ...props
  },
  ref
) => {
  const [tagValue, setTagValue] = useState<Set<string>>(new Set(defaultValue))
  const [inputValue, setInputValue] = useState<string>("")
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
  }

  const addTag = (value: string) => {
    if (value.trim() === "" || !onChange) return
    const newTagValue = new Set([...Array.from(tagValue)])
    newTagValue.add(value)
    setTagValue(newTagValue)
    onChange(generateOnChangeEvent(name!, [...Array.from(newTagValue)]))
  }
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    addTag(inputValue)
    setInputValue("")
  }

  const deleteTag = (value: string) => {
    if (props.disabled || !onChange) return
    const newTagValue = new Set([...Array.from(tagValue)])
    newTagValue.delete(value)
    setTagValue(newTagValue)
    onChange(generateOnChangeEvent(name!, [...Array.from(newTagValue)]))
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

  const handleBlur = () => {
    if (!onBlur) return
    onBlur(generateOnChangeEvent(name!, [...Array.from(tagValue)]))
  }

  return (
    <StyledWrapper className={className}>
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
          onBlur={handleBlur}
          {...props}
        />
      </form>
      {hint && <div className="hint">{hint}</div>}
      {error && <div className="error">{error}</div>}
    </StyledWrapper>
  )
}

export default forwardRef(Tags)

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
`
