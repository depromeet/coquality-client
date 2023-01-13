import styled from "@emotion/styled"
import React, { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import DeleteAllModal from "./modals/DeleteAllModal"
import PostCard from "./PostCard"
import bookmarksRepository from "@libs/api/bookmarks"
import { useAuth } from "@hooks/useAuth"

type Props = {}

const BookmarkView: React.FC<Props> = ({}) => {
  const auth = useAuth()
  const [open, setOpen] = useState(false)
  const { data } = useQuery(
    ["userBookmarks"],
    () => bookmarksRepository.getBookmarkPosts(auth.token),
    {
      enabled: !!auth.token,
    }
  )

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
          {data?.map((bookmark: any) => (
            <PostCard key={`PostListView-${bookmark?.userId}`} data={data} />
          ))}
        </div>
      </StyledWrapper>
      <DeleteAllModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default BookmarkView

const StyledWrapper = styled.div`
  padding-top: 70px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 40px;
    .rt {
      cursor: pointer;
    }
  }
  .post-list {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr);
    gap: 20px;
  }
`
