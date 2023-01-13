import Button from "@components/inputs/Button"
import Textarea from "@components/inputs/Textarea"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"

import AmazedButton from "./svgs/AmazedButton.svg"
import CuriousButton from "./svgs/CuriousButton.svg"
import FrightenedButton from "./svgs/FrightenedButton.svg"
import GoodButton from "./svgs/GoodButton.svg"
import LoveButton from "./svgs/LoveButton.svg"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import commentsRepository from "@libs/api/comments"
import { useRouter } from "next/router"
import { useAuth } from "@hooks/useAuth"

type CommentFormType = { contents: string }

type Props = {}

const CommentForm: React.FC<Props> = ({}) => {
  const queryClient = useQueryClient()
  const auth = useAuth()
  const router = useRouter()

  const postId = +`${router.query["post-id"]}`
  const userId = +`${router.query["username"]}`

  const { register, handleSubmit, reset, setValue, getValues } =
    useForm<CommentFormType>()

  const mutation = useMutation({
    mutationFn: ({ postId, contents }: { postId: number; contents: string }) =>
      commentsRepository.createCommentOnPost(postId, contents, auth.token),
  })

  const onSubmit = (data: CommentFormType) => {
    mutation.mutate(
      {
        postId,
        contents: data.contents,
      },
      {
        onSuccess: () => {
          reset({
            contents: "",
          })
          queryClient.refetchQueries(["getCommentsOfPost", { postId }])
          queryClient.refetchQueries(["getPostById", { postId, userId }])
        },
      }
    )
  }

  return (
    <StyledWrapper>
      <Textarea
        className="input common-h5-rg"
        placeholder="댓글 작성이 어렵다면 간단한 이모티콘으로 글에 대한 생각을 표현해보세요!"
        {...register("contents")}
      />
      <div className="footer">
        <div className="lt">
          <GoodButton
            className="emoji-btn"
            onClick={() => {
              setValue("contents", `${getValues().contents}👍`)
            }}
          />
          <LoveButton
            className="emoji-btn"
            onClick={() => {
              setValue("contents", `${getValues().contents}😍`)
            }}
          />
          <AmazedButton
            className="emoji-btn"
            onClick={() => {
              setValue("contents", `${getValues().contents}😮`)
            }}
          />
          <CuriousButton
            className="emoji-btn"
            onClick={() => {
              setValue("contents", `${getValues().contents}🤔`)
            }}
          />
          <FrightenedButton
            className="emoji-btn"
            onClick={() => {
              setValue("contents", `${getValues().contents}😱`)
            }}
          />
        </div>
        <div className="rt">
          <Button
            className="submit-btn common-h6-sb"
            variant="outline"
            onClick={handleSubmit(onSubmit)}
          >
            작성완료
          </Button>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default CommentForm

const StyledWrapper = styled.div`
  background-color: ${colors.grey200};
  padding: 20px;
  border-radius: 12px;
  .input {
    margin-bottom: 20px;
  }
  .footer {
    border-top: 1px solid ${colors.grey400};
    display: flex;
    justify-content: space-between;
    padding-top: 12px;
    align-items: center;
    .lt {
      display: flex;
      gap: 7px;
      .emoji-btn {
        width: 42px;
        height: 42px;
        cursor: pointer;
      }
    }
    .rt {
      .submit-btn {
        padding: 8px 16px;
        height: fit-content;
      }
    }
  }
`
