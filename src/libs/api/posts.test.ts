// integation tests for coquality rest api

import coqualityAxiosClient from "./client"
import { PostsRepository } from "./posts"

// TODO: should deleted
// TODO: add fixtures
const postsRepository = new PostsRepository(coqualityAxiosClient)

describe("PostsRepository", () => {
  test("getPosts", async () => {
    const posts = await postsRepository.getPosts({
      sort: "LATEST",
    })

    expect(posts).toBeTruthy()
    expect(posts.length).toBeGreaterThanOrEqual(0)
  })

  test("getPostById", async () => {
    const post = await postsRepository.getPostById(1, {})
    expect(post).toHaveProperty("id")
  })

  test("createPost", async () => {
    const created = await postsRepository.createPost({
      contents: "흐하하하하",
      primaryCategory: "DESIGN",
      summary: "흠핳하하핳",
      thumbnail: "https://picsum.photos/200",
      title: "후훗 힛 하핳 핫핫 흐핳",
    })

    expect(created).toBeTruthy()
    expect(created).toHaveProperty("id")
  })

  test("updatePost", async () => {
    const modified = await postsRepository.updatePost(1, {
      contents: "string",
      postStatus: "ISSUED",
      primaryPostCategoryCode: "DESIGN",
      summary: "string",
      thumbnail: "https://picsum.photos/200",
      title: "string",
    })

    expect(modified).toBeTruthy()
    expect(modified).toHaveProperty("id")
  })

  test("deletePost", async () => {
    const deleted = await postsRepository.deletePost(1)
    expect(deleted).toBeTruthy()
  })
})
