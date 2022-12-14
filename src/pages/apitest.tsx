import coqualityAxiosClient from "@libs/api/client"
import { PostsRepository } from "@libs/api/posts"
import { useEffect } from "react"

const ApiTestPage = () => {
  useEffect(() => {
    const func = async () => {
      const modified = await new PostsRepository(
        coqualityAxiosClient
      ).updatePost(7, {
        contents: "업데이트 처리중입니다 ",
        postStatus: "ISSUED",
        primaryPostCategoryCode: "DESIGN",
        summary: "업데이트 처리중입니다 ",
        thumbnail: "업데이트 처리중입니다 ",
        title: "업데이트 처리중입니다 ",
      })

      console.log(modified)
    }

    func()
  }, [])
  return <div></div>
}

export default ApiTestPage
