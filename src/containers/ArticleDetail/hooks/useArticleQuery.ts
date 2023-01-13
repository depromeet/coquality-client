import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import postsRepository from "@libs/api/posts"
import { useAuth } from "@hooks/useAuth"

// TODO options type
const useArticleQuery = () => {
  const router = useRouter()
  const auth = useAuth()

  const userId = +`${router.query["username"]}`
  const postId = +`${router.query["post-id"]}`

  const query = useQuery(
    ["getPostById", { postId, userId }],
    () => postsRepository.getPostById(postId, { userId }, auth.token),
    {
      enabled: !!(userId && postId && auth.token),
    }
  )

  return query
}

export default useArticleQuery
