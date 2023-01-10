import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"
import TrashIco from "./TrashIco.svg"
import commentsRepository, { IComment } from "@libs/api/comments"
import { toStringByFormatting } from "@libs/utils/time"
import UserBtn from "./UserAvatar.svg"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/router"

// TODO: username, user img
// TODO: 로그인 연동시, 내 댓글만 삭제 가능하도록 수정

type Props = {
  data: IComment
}

const Comment: React.FC<Props> = ({ data }) => {
  const router = useRouter()
  const queryClient = useQueryClient()
  const postId = +`${router.query["post-id"]}`

  const mutation = useMutation({
    mutationFn: ({
      postId,
      commentId,
    }: {
      postId: number
      commentId: number
    }) => commentsRepository.deleteCommentOnPost(postId, commentId),
  })

  const handleDelete = () => {
    mutation.mutate(
      {
        postId,
        commentId: data.id,
      },
      {
        onSuccess: () => {
          queryClient.refetchQueries(["getCommentsOfPost", { postId }])
        },
      }
    )
  }

  console.log(data)

  const createdAt = toStringByFormatting(new Date(data.createdAt), ".")
  return (
    <StyledWrapper>
      <div className="lt">
        <UserBtn />
      </div>
      <div className="rt">
        <div className="top common-h6-rg">
          <div className="lt">
            <div className="nickname">{"username"}</div>
            <div className="date">{createdAt}</div>
          </div>
          <a className="rt" onClick={handleDelete}>
            <TrashIco />
            <div>삭제</div>
          </a>
        </div>
        <div className="mid common-h5-rg">{data.contents}</div>
      </div>
    </StyledWrapper>
  )
}

export default Comment

const StyledWrapper = styled.div`
  padding: 25px 10px;
  display: flex;
  justify-content: space-between;
  gap: 11px;
  border-bottom: 1px solid ${colors.grey300};
  > .lt {
    width: 32px;
    height: 32px;
    background-color: ${colors.grey300};
    border-radius: 50%;
    svg {
      font-size: 30px;
    }
  }
  > .rt {
    width: 100%;
    > .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 32px;
      gap: 12px;
      margin-bottom: 4px;
      .lt {
        width: 100%;
        display: flex;
        gap: 12px;
        .nickname {
          color: ${colors.grey600};
        }
        .date {
          color: ${colors.grey400};
        }
      }
      .rt {
        display: flex;
        align-items: center;
        gap: 4px;
        color: ${colors.grey400};
        flex-shrink: 0;
      }
    }
    > .mid {
      margin-bottom: 10px;
    }
  }
`
