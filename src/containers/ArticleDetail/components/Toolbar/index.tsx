import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React, { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import Hand from "./svgs/Hand.svg"
import Bookmark from "./svgs/Bookmark.svg"
import ShareBtn from "./svgs/ShareBtn.svg"
import BookmarkModal from "./BookmarkModal"
import useArticleQuery from "@containers/ArticleDetail/hooks/useArticleQuery"
import clapsRepository from "@libs/api/claps"
import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import bookmarkRepository from "@libs/api/bookmarks"
import { useAuth } from "@hooks/useAuth"

type Props = {}

const Toolbar: React.FC<Props> = ({}) => {
  const { data } = useArticleQuery()
  const auth = useAuth()
  const queryClient = useQueryClient()
  const [open, setOpen] = useState(false)
  const router = useRouter()

  const postId = +`${router.query["post-id"]}`
  const userId = +`${router.query["username"]}`

  const { data: bookmarkData } = useQuery(
    ["bookmarkCheck", { postId }],
    () => bookmarkRepository.bookmarkCheck(postId, auth.token),
    {
      enabled: !!postId,
    }
  )

  const mutation = useMutation({
    mutationFn: ({ postId }: { postId: number }) =>
      clapsRepository.clapPost(postId, auth.token),
  })
  const addBookmarkMutation = useMutation({
    mutationFn: ({ postId, userId }: { postId: number; userId: number }) =>
      bookmarkRepository.addBookmark(postId, userId, auth.token),
  })

  const removeBookmarkMutation = useMutation({
    mutationFn: ({ postId }: { postId: number }) =>
      bookmarkRepository.removeBookmark(postId, auth.token),
  })

  const handleBookmarkBtn = () => {
    if (!bookmarkData?.bookmarkYn) {
      addBookmarkMutation.mutate(
        {
          postId,
          userId,
        },
        {
          onSuccess: () => {
            queryClient.refetchQueries(["bookmarkCheck", { postId }])
          },
        }
      )
      setOpen(true)
    } else {
      removeBookmarkMutation.mutate(
        {
          postId,
        },
        {
          onSuccess: () => {
            queryClient.refetchQueries(["bookmarkCheck", { postId }])
          },
        }
      )
    }
  }

  const handleClapBtn = () => {
    mutation.mutate(
      {
        postId: data!.id,
      },
      {
        onSuccess: () => {
          queryClient.refetchQueries(["getPostById", { postId, userId }])
        },
      }
    )
  }
  console.log(addBookmarkMutation.data)

  return (
    <>
      <StyledWrapper>
        <div className="top">
          <div className="clap-btn" onClick={handleClapBtn}>
            <Hand />
            <div className="common-h6-rg">{data?.clapCount}</div>
          </div>
          <div
            className="bookmark-btn"
            onClick={handleBookmarkBtn}
            data-active={bookmarkData?.bookmarkYn}
          >
            <Bookmark />
          </div>
        </div>
        <div className="mid">
          <ShareBtn />
        </div>
      </StyledWrapper>
      <BookmarkModal
        bookmarkId={addBookmarkMutation.data}
        postTitle={data?.title}
        open={open}
        onClose={() => setOpen(false)}
        disableDimmed
      />
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
      &[data-active="false"] {
        path {
          stroke: white;
          fill: white;
        }
      }
    }
  }
  .mid {
    cursor: pointer;
  }
`
