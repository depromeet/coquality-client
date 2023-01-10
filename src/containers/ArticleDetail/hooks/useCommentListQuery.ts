import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import commentsRepository from "@libs/api/comments"
import { useAuthInjection } from "@hooks/useAuth"

// TODO options type
const useCommentsQuery = () => {
  const router = useRouter()
  const authInjectedCommentsRepository = useAuthInjection(commentsRepository)
  const postId = +`${router.query["post-id"]}`

  const query = useQuery(
    ["getCommentsOfPost", { postId }],
    () => authInjectedCommentsRepository.getCommentsOfPost(postId),
    {
      enabled: !!postId,
    }
  )

  return query
}

export default useCommentsQuery
