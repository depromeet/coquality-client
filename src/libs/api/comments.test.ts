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
      expect(comments).toBeTruthy()
      comments.forEach((comment) => {
        expect(comment).toHaveProperty("id")
        expect(comment).toHaveProperty("contents")
        expect(comment).toHaveProperty("userId")
        expect(comment).toHaveProperty("postId")
        expect(comment).toHaveProperty("createdAt")
      })
    })
  })

  describe("updateCommentOnPost", () => {
    it("should update comment on post", async () => {
      const comments = await repository.getCommentsOfPost(5)
      expect(comments.length).toBeGreaterThan(0)
      const targetComment = comments[0]
      expect(targetComment.userId).toBe(2)
      const updatedComment = await repository.updateCommentOnPost(
        targetComment.id,
        "테스트 댓글 1 수정",
        2
      )

      expect(updatedComment).toBeTruthy()
      expect(updatedComment).toHaveProperty("id")
      expect(targetComment.id).toEqual(updatedComment.id)
      expect(updatedComment).toHaveProperty("contents")
      expect(updatedComment).toHaveProperty("userId")
      expect(updatedComment).toHaveProperty("postId")
      expect(updatedComment).toHaveProperty("createdAt")
    })
  })

  describe("deleteCommentOnPost", () => {
    it("should delete comment on post", async () => {
      await repository.createCommentOnPost(5, "마지막 댓글")

      const commentsBeforeDelete = await repository.getCommentsOfPost(5)
      expect(commentsBeforeDelete.length).toBeGreaterThan(0)

      const targetComment =
        commentsBeforeDelete[commentsBeforeDelete.length - 1]
      expect(targetComment.userId).toBe(2)

      await repository.deleteCommentOnPost(
        targetComment.postId,
        targetComment.id
      )

      const commentsAfterDelete = await repository.getCommentsOfPost(5)
      expect(commentsAfterDelete.length).toBe(commentsBeforeDelete.length - 1)
      expect(commentsAfterDelete).not.toContainEqual(targetComment)
    })
  })
})
