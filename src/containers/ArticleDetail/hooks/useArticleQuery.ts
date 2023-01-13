import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import postsRepository from "@libs/api/posts"
<<<<<<< HEAD
import { useAuth } from "@hooks/useAuth"
=======
import { useAuthInjection } from "@hooks/useAuth"
>>>>>>> develop

// TODO options type
const useArticleQuery = () => {
  const router = useRouter()
<<<<<<< HEAD
  const auth = useAuth()
  
=======
  const authInjectedPostsRepository = useAuthInjection(postsRepository)

>>>>>>> develop
  const userId = +`${router.query["username"]}`
  const postId = +`${router.query["post-id"]}`

  const query = useQuery(
    ["getPostById", { postId, userId }],
<<<<<<< HEAD
    () => postsRepository.getPostById(postId, { userId }, auth.token),
=======
    () => authInjectedPostsRepository.getPostById(postId, { userId }),
>>>>>>> develop
    {
      enabled: !!(userId && postId),
    }
  )

  return query
}

export default useArticleQuery
