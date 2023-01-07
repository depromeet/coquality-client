import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import commentsRepository from "@libs/api/comments"

// TODO options type
const useCommentsQuery = () => {
  const router = useRouter()

  const postId = +`${router.query["post-id"]}`

  const query = useQuery(
    ["getCommentsOfPost", { postId }],
    () => commentsRepository.getCommentsOfPost(postId),
    {
      enabled: !!postId,
    }
  )

  return query
}

export default useCommentsQuery
