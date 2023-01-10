import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import postsRepository from "@libs/api/posts"
import { useAuthInjection } from "@hooks/useAuth"

// TODO options type
const useArticleQuery = () => {
  const router = useRouter()
  const authInjectedPostsRepository = useAuthInjection(postsRepository)

  const userId = +`${router.query["username"]}`
  const postId = +`${router.query["post-id"]}`

  const query = useQuery(
    ["getPostById", { postId, userId }],
    () => authInjectedPostsRepository.getPostById(postId, { userId }),
    {
      enabled: !!(userId && postId),
    }
  )

  return query
}

export default useArticleQuery
