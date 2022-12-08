import { Editor } from "@toast-ui/react-editor"
import React from "react"

type Props = {}

const ArticleEditor: React.FC<Props> = (props) => {
  return (
    <Editor
      placeholder="내용을 입력해주세요."
      previewStyle="vertical"
      height="300px"
      initialEditType="wysiwyg"
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
    />
  )
}

export default ArticleEditor
