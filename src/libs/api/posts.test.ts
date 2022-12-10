import { createPost, getPostById, getPosts, updatePost } from "./posts"

// integation tests for coquality rest api
// TODO: should deleted

const TEMP_AUTH_TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"

describe("posts api", () => {
  test("getPosts", async () => {
    const posts = await getPosts({
      sort: "LATEST",
    })

    expect(posts).toBeTruthy()
    expect(posts.length).toBeGreaterThanOrEqual(0)
  })

  test("getPostById", async () => {
    const post = await getPostById(1, {}, TEMP_AUTH_TOKEN)
    expect(post).toHaveProperty("id")
  })

  test("createPost", async () => {
    const created = await createPost(
      {
        contents: "흐하하하하",
        primaryCategory: "DESIGN",
        summary: "흠핳하하핳",
        thumbnail: "https://picsum.photos/200",
        title: "후훗 힛 하핳 핫핫 흐핳",
      },
      TEMP_AUTH_TOKEN
    )

    console.log(created)
  })

  test("updatePost", async () => {
    const modified = await updatePost(
      1,
      {
        contents: "string",
        postStatus: "ISSUED",
        primaryPostCategoryCode: "DESIGN",
        summary: "string",
        thumbnail: "https://picsum.photos/200",
        title: "string",
      },
      TEMP_AUTH_TOKEN
    )
  })
})
