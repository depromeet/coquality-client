// integation tests for coquality rest api

import coqualityAxiosClient from "./client"
import { PostsRepository } from "./posts"

// TODO: integration tests should be deleted
// TODO: add fixtures
let postsRepository: PostsRepository

beforeAll(() => {
  postsRepository = new PostsRepository(
    coqualityAxiosClient,
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"
  )
})

describe("PostsRepository", () => {
  test("getPosts", async () => {
    const posts = await postsRepository.getPosts("LATEST")

    expect(posts).toBeTruthy()
    expect(posts.length).toBeGreaterThanOrEqual(0)
    posts.forEach((post) => {
      expect(post).toHaveProperty("id")
    })
  })

  test("getPostById", async () => {
    const post = await postsRepository.getPostById(2, {})
    expect(post).toHaveProperty("id")
  })

  test("createPost", async () => {
    const created = await postsRepository.createPost({
      contents: "요를레히호",
      primaryCategory: "DESIGN",
      summary: "흡뽜핫",
      thumbnail: "https://picsum.photos/300",
      title: "후훗 힛 하핳 핫핫 흐핳 ㅏㅏ",
    })

    expect(created).toBeTruthy()
    expect(created).toHaveProperty("id")
  })

  test("updatePost", async () => {
    const created = await postsRepository.createPost({
      contents: "이모 여기 돼지국밥 하나요",
      primaryCategory: "DESIGN",
      summary: "돼지국밥 주문",
      thumbnail: "https://picsum.photos/300",
      title: "돼지국밥 주문입니다",
    })

    await postsRepository.updatePost(created.id, {
      contents: "이모 여기 진로 하나요",
      postStatus: "ISSUED",
      primaryPostCategoryCode: "DESIGN",
      summary: "이모 여기 진로 하나 주세요",
      thumbnail: "https://picsum.photos/200",
      title: "진로 주문입니다",
    })
  })

  test("deletePost", async () => {
    const created = await postsRepository.createPost({
      contents: "이모 여기 돼지국밥 하나요",
      primaryCategory: "DESIGN",
      summary: "흡뽜핫",
      thumbnail: "https://picsum.photos/300",
      title: "후훗 힛 하핳 핫핫 흐핳 ㅏㅏ",
    })

    await postsRepository.deletePost(created.id)
  })

  test("getMyPosts", async () => {
    const myPosts = await postsRepository.getMyPosts()

    expect(myPosts).toHaveProperty("length")
    myPosts.forEach((myPost) => {
      expect(myPost).toBeTruthy()
      expect(myPost).toHaveProperty("id")
    })
  })
})
