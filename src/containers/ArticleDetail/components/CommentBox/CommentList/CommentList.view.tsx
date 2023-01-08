import styled from "@emotion/styled"
import React from "react"
import Comment from "./Comment"
import CommentListEmpty from "./CommentList.empty"
import useCommentsQuery from "@containers/ArticleDetail/hooks/useCommentListQuery"

type Props = {}

const CommentListView: React.FC<Props> = ({}) => {
  const { data } = useCommentsQuery()

  if (!data || data?.length === 0) return <CommentListEmpty />
  return (
    <StyledWrapper>
      {data
        .concat()
        .reverse()
        .map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
    </StyledWrapper>
  )
}

export default CommentListView

const StyledWrapper = styled.div``
