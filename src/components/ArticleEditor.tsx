import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import { Editor } from "@toast-ui/react-editor"
import React from "react"

type Props = {}

const ArticleEditor: React.FC<Props> = (props) => {
  return (
    <StyledWrapper>
      <Editor
        placeholder="내용을 입력해주세요."
        previewStyle="vertical"
        initialValue=""
        // height="300px"
        initialEditType="wysiwyg"
        hideModeSwitch
        toolbarItems={[
          ["heading", "bold", "italic", "strike"],
          ["hr", "quote"],
          ["ul", "ol", "task", "indent", "outdent"],
          ["table", "image", "link"],
          ["code", "codeblock"],
        ]}
      />
    </StyledWrapper>
  )
}

export default ArticleEditor

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
