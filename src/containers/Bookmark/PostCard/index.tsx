/* eslint-disable @next/next/no-img-element */
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React, { useState } from "react"
import Link from "next/link"
import DeleteOneModal from "../modals/DeleteOneModal"
import DeleteIco from "./DeleteIco.svg"
import { useQuery } from "@tanstack/react-query"
import bookmarksRepository from "@libs/api/bookmarks"
import { IPostType } from "@libs/api/posts"
import { BookmarkType } from "@libs/api/bookmarks"
import { useAuth } from "@hooks/useAuth"

type Props = {
  bookmark: BookmarkType
}

const PostCard: React.FC<Props> = ({ bookmark }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledWrapper>
        <div className="top">
          <div className="lt">
            <a className="title common-h4-sb">{bookmark.title}</a>
            <div className="subtitle common-h6-rg">
              {bookmark.nickname} | {bookmark.createdAt}
            </div>
          </div>
          <img
            src={bookmark.thumbnail}
            alt="저장된 글 썸네일"
            className="rt"
          ></img>
        </div>
        <div className="mid common-h5-rg">{bookmark.description}</div>
        <div className="bottom">
          <div className="btn common-h6-rg">
            <DeleteIco />
            <div onClick={() => setOpen(true)}>삭제</div>
          </div>
        </div>
      </StyledWrapper>
      <DeleteOneModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default PostCard

const StyledWrapper = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  .top {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .lt {
      width: 232px;
      height: 54px;
      flex-direction: column;
      gap: 10px;
      .subtitle {
        color: ${colors.grey400};
      }
    }
    .rt {
      width: 72px;
      height: 72px;
      border-radius: 10px;
      flex-shrink: 0;
      background-color: ${colors.grey300};
    }
  }
  .mid {
    height: 169px;
    padding: 12px 16px;
    border-radius: 10px;
    background-color: ${colors.grey200};
    margin-bottom: 20px;
  }
  .bottom {
    display: flex;
    justify-content: flex-end;
    .btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      color: ${colors.grey400};
    }
  }
`
