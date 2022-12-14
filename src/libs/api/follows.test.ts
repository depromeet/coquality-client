// integation tests for coquality rest api

import coqualityAxiosClient from "./client"
import { FollowsRepository } from "./follows"

// TODO: integration tests should be deleted
// TODO: add fixtures
let repository: FollowsRepository

beforeAll(() => {
  repository = new FollowsRepository(
    coqualityAxiosClient,
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"
  )
})

describe("FollowsRepository", () => {
  // TODO: the following tests are not pure functions and thus have side effects. it should be fixed.
  describe("getFollowerCount", () => {
    it("should get follower count", async () => {
      const followerCount = await repository.getFollowerCount(2)
      expect(typeof followerCount).toBe("number")
    })
  })

  describe("followUser", () => {
    it("should follow after unfollowing user", async () => {
      // TODO: check if other user has followers
      try {
        await repository.followUser(2)
      } catch (e) {
        await repository.unfollowUser(2)
        await repository.followUser(2)
      }
    })
  })

  describe("unfollowUser", () => {
    it("should unfollow user", async () => {
      try {
        await repository.unfollowUser(2)
      } catch (e) {
        await repository.followUser(2)
        await repository.unfollowUser(2)
      }
    })
  })

  describe("getFollowers", () => {
    it("should get all followers", async () => {
      await repository.followUser(2)

      const followers = await repository.getFollowers(2)
      expect(followers).toBeTruthy()
      expect(followers.length).toBeGreaterThan(0)

      followers.forEach((follower) => {
        expect(follower).toHaveProperty("userId")
        expect(follower).toHaveProperty("nickname")
        expect(follower).toHaveProperty("profileImage")
      })

      // cleanup
      await repository.unfollowUser(2)
    })
  })

  describe("getFollowing", () => {
    it("should get all followings", async () => {
      await repository.followUser(2)

      const followings = await repository.getFollowings(2)
      expect(followings).toBeTruthy()
      expect(followings.length).toBeGreaterThan(0)

      followings.forEach((follow) => {
        expect(follow).toHaveProperty("userId")
        expect(follow).toHaveProperty("nickname")
        expect(follow).toHaveProperty("profileImage")
      })

      // cleanup
      await repository.unfollowUser(2)
    })
  })
})
