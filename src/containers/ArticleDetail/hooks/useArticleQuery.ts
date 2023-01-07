import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import postsRepository from "@libs/api/posts"

// TODO options type
const useArticleQuery = () => {
  const router = useRouter()

  const userId = +`${router.query["username"]}`
  const postId = +`${router.query["post-id"]}`

  const query = useQuery(
    ["getPostById", { postId, userId }],
    () => postsRepository.getPostById(postId, { userId }),
    {
      enabled: !!(userId && postId),
    }
  )

  return query
}

export default useArticleQuery
