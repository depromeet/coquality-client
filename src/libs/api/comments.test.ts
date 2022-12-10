// integation tests for coquality rest api

import coqualityAxiosClient from "./client"
import { CommentsRepository } from "./comments"

// TODO: integration tests should be deleted
// TODO: add fixtures
let repository: CommentsRepository

beforeAll(() => {
  repository = new CommentsRepository(
    coqualityAxiosClient,
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"
  )
})

describe("CommentsRepository", () => {
  describe("createCommentOnPost", () => {
    it("should create comment on post", async () => {
      await repository.createCommentOnPost(5, "테스트 댓글 1")
    })
  })

  describe("getCommentsOfPost", () => {
    it("should get all comments of post", async () => {
      const comments = await repository.getCommentsOfPost(5)
      // TODO: comment가 있는 api들은 500 code가 뜬다. 백엔드에 서버 로그 확인해서 고쳐야 할듯.
    })
  })
})
