import { colors } from "@constants/colors"
import { css } from "@emotion/css"
import styled from "@emotion/styled"
import { generateOnChangeEvent } from "@libs/utils"
import { toastCss } from "@styles/toast"
import ToastuiEditor from "@toast-ui/editor"
import { Editor, EditorProps } from "@toast-ui/react-editor"
import {
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useRef,
  useState,
} from "react"
import { ChangeHandler } from "react-hook-form"

interface Props {
  name?: string
  defaultValue?: string
  onChange?: ChangeHandler
  onBlur?: ChangeHandler
}

const ArticleEditor: ForwardRefRenderFunction<Editor, Props> = (
  { name = "content", defaultValue = "", onChange, onBlur },
  ref
) => {
  const editorRef = useRef<Editor>(null)
  const [editorInstanse, setEditorInstanse] = useState<
    ToastuiEditor | undefined
  >(undefined)

  useEffect(() => {
    if (!editorRef.current) return
    const instanse = editorRef.current.getInstance()

    setEditorInstanse(instanse)
    return () => {}
  }, [editorRef])

  const handleChange = () => {
    if (!editorInstanse || !onChange) return
    onChange(generateOnChangeEvent(name, editorInstanse.getMarkdown()))
  }
  const handleBlur = (e: any) => {
    if (!editorInstanse || !onBlur) return
    onBlur(generateOnChangeEvent(name, editorInstanse.getMarkdown()))
  }

  console.log(editorInstanse?.isViewer())

  return (
    <StyledWrapper css={toastCss}>
      <Editor
        ref={editorRef}
        viewer={true}
        initialValue={defaultValue}
        placeholder="내용"
        previewStyle="vertical"
        initialEditType="wysiwyg"
        hideModeSwitch
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </StyledWrapper>
  )
}

export default forwardRef(ArticleEditor)

const StyledWrapper = styled.div`
  .toastui-editor-defaultUI {
    border: none;
    border-top: 1px solid #dadde6;
  }
  .toastui-editor-ww-container {
    background-color: transparent;
  }
  .toastui-editor-contents {
    padding-left: 0;
    padding-right: 0;
    p {
      color: ${colors.grey600};
      font-size: 16px;
      line-height: 150%;
      letter-spacing: 0%;
      font-weight: 400;
    }
  }
`
