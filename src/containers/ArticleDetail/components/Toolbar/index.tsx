import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React, { useState } from "react"

import Hand from "./svgs/Hand.svg"
import Bookmark from "./svgs/Bookmark.svg"
import ShareBtn from "./svgs/ShareBtn.svg"
import BookmarkModal from "./BookmarkModal"
import useArticleQuery from "@containers/ArticleDetail/hooks/useArticleQuery"

type Props = {}

const Toolbar: React.FC<Props> = ({}) => {
  const { data } = useArticleQuery()
  const [open, setOpen] = useState(false)

  const handleBookmarkBtn = () => {
    setOpen(true)
  }

  return (
    <>
      <StyledWrapper>
        <div className="top">
          <div className="clap-btn">
            <Hand />
            <div className="common-h6-rg">{data?.clapCount}</div>
          </div>
          <div className="bookmark-btn" onClick={handleBookmarkBtn}>
            <Bookmark />
          </div>
        </div>
        <div className="mid">
          <ShareBtn />
        </div>
      </StyledWrapper>
      <BookmarkModal open={open} onClose={() => setOpen(false)} disableDimmed />
    </>
  )
}

export default Toolbar

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  .top {
    width: fit-content;
    display: flex;
    flex-direction: column;
    background-color: ${colors.grey800};
    gap: 16px;
    border-radius: 100px;
    color: white;
    padding: 20px 12px;
    .clap-btn {
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .bookmark-btn {
      cursor: pointer;
    }
  }
  .mid {
    cursor: pointer;
  }
`
