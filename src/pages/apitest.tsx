import { createPost, updatePost } from "@libs/api/posts"
import { useEffect } from "react"

const TEMP_AUTH_TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"

const ApiTestPage = () => {
  useEffect(() => {
    const func = async () => {
      const modified = await updatePost(
        7,
        {
          contents: "업데이트 처리중입니다 ",
          postStatus: "ISSUED",
          primaryPostCategoryCode: "DESIGN",
          summary: "업데이트 처리중입니다 ",
          thumbnail: "업데이트 처리중입니다 ",
          title: "업데이트 처리중입니다 ",
        },
        TEMP_AUTH_TOKEN
      )

      console.log(modified)
    }

    func()
  }, [])
  return <div></div>
}

export default ApiTestPage
