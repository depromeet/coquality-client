// integation tests for coquality rest api

import coqualityAxiosClient from "./client"
import { UsersRepository } from "./users"

// TODO: integration tests should be deleted
// TODO: add fixtures
let repository: UsersRepository

beforeAll(() => {
  repository = new UsersRepository(
    coqualityAxiosClient,
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"
  )
})

describe("UsersRepository", () => {
  describe("readMyInfo", () => {
    it("should read my info", async () => {
      const user = await repository.readMyInfo()

      expect(user).toBeTruthy()
      expect(user).toHaveProperty("nickname")
      expect(user).toHaveProperty("userId")
    })
  })

  describe("modifyUser", () => {
    it("should modify user", async () => {
      const meBeforeModify = await repository.readMyInfo()

      const nickname = "test nickname"
      const email = "test@gmail.com"
      const userSummary = "test user summary"

      await repository.modifyUser(email, nickname, userSummary)

      const meAfterModify = await repository.readMyInfo()
      expect(meAfterModify.nickname).toEqual(nickname)
      expect(meAfterModify.userId).toEqual(meBeforeModify.userId)
    })
  })
})
