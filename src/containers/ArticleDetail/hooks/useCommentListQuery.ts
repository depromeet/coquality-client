import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import commentsRepository from "@libs/api/comments"
<<<<<<< HEAD
import { useAuth } from "@hooks/useAuth"
=======
import { useAuthInjection } from "@hooks/useAuth"
>>>>>>> develop

// TODO options type
const useCommentsQuery = () => {
  const router = useRouter()
<<<<<<< HEAD
  const auth = useAuth()

=======
  const authInjectedCommentsRepository = useAuthInjection(commentsRepository)
>>>>>>> develop
  const postId = +`${router.query["post-id"]}`

  const query = useQuery(
    ["getCommentsOfPost", { postId }],
<<<<<<< HEAD
    () => commentsRepository.getCommentsOfPost(postId, auth.token),
=======
    () => authInjectedCommentsRepository.getCommentsOfPost(postId),
>>>>>>> develop
    {
      enabled: !!postId,
    }
  )

  return query
}

export default useCommentsQuery
