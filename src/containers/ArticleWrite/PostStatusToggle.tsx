import React, {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useState,
} from "react"

import { Toggle } from "@components/inputs"
import { ChangeHandler } from "react-hook-form"
import { PostStatusType } from "@libs/api/posts"
import { generateOnChangeEvent } from "@libs/utils"

interface Props {
  name?: string
  defaultValue?: boolean
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
}

const PostStatusToggle: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { name, defaultValue = false, onChange, onBlur },
  ref
) => {
  const [checked, setChecked] = useState(defaultValue)

  useEffect(() => {
    if (!onBlur) return
    handleBlur()
  }, [])

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!name || !onChange) return
    const newChecked = !checked
    setChecked(newChecked)
    const value: PostStatusType = newChecked ? "ISSUED" : "PRIVATE"
    onChange(generateOnChangeEvent(name, value))
  }
  const handleBlur = () => {
    if (!name || !onBlur) return
    if (!onBlur) return
    const value: PostStatusType = checked ? "ISSUED" : "PRIVATE"
    onBlur(generateOnChangeEvent(name, value))
  }
  return (
    <Toggle
      ref={ref}
      checked={checked}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  )
}

export default forwardRef(PostStatusToggle)
