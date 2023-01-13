import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import commentsRepository from "@libs/api/comments"
import { useAuth } from "@hooks/useAuth"

// TODO options type
const useCommentsQuery = () => {
  const router = useRouter()
  const auth = useAuth()

  const postId = +`${router.query["post-id"]}`

  const query = useQuery(
    ["getCommentsOfPost", { postId }],
    () => commentsRepository.getCommentsOfPost(postId, auth.token),
    {
      enabled: !!postId,
    }
  )

  return query
}

export default useCommentsQuery
