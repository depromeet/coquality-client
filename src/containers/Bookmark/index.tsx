import styled from "@emotion/styled"
import React, { useState } from "react"
import DeleteAllModal from "./DeleteAllModal"
import PostCard from "./PostCard"

type Props = {}

const Bookmark: React.FC<Props> = ({}) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledWrapper className="common-container">
        <div className="header">
          <div className="lt common-h1-sb">저장한 글</div>
          <div className="rt common-h5-rg" onClick={() => setOpen(true)}>
            모두 지우기
          </div>
        </div>
        <div className="post-list">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </StyledWrapper>
      <DeleteAllModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Bookmark

const StyledWrapper = styled.div`
  padding-top: 70px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
  }
  .post-list {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 20px;
  }
`
