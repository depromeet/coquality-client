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

  const mutation = useMutation({
    mutationFn: ({ postId }: { postId: number }) =>
      clapsRepository.clapPost(postId, auth.token),
  })

  const handleBookmarkBtn = () => {
    setOpen(true)
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

  return (
    <>
      <StyledWrapper>
        <div className="top">
          <div className="clap-btn" onClick={handleClapBtn}>
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
      <BookmarkModal
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
    }
  }
  .mid {
    cursor: pointer;
  }
`
