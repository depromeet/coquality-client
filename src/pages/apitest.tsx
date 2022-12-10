import { createPost } from "@libs/api/posts"
import { useEffect } from "react"

const ApiTestPage = () => {
  useEffect(() => {
    const func = async () => {
      const created = await createPost(
        {
          contents: "흐하하하하",
          primaryCategory: "DESIGN",
          summary: "흠핳하하핳",
          thumbnail: "https://picsum.photos/200",
          title: "후훗 힛 하핳 핫핫 흐핳",
        },
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"
      )

      console.log(created)
    }

    func()
  }, [])
  return <div></div>
}

export default ApiTestPage
