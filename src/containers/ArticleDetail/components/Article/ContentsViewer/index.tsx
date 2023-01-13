import { toastCss } from "@styles/toast"
import { Viewer } from "@toast-ui/react-editor"
import React from "react"

type Props = {
  initialValue?: string
}

const ContentsViewer: React.FC<Props> = ({ initialValue }) => {
  return (
    <div css={toastCss}>
      <Viewer initialValue={initialValue} />
    </div>
  )
}

export default ContentsViewer
