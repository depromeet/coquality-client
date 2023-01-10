// integation tests for coquality rest api

import { exitCode } from "process"
import { AuthRepository } from "./auth"
import coqualityAxiosClient from "./client"
import { PostsRepository } from "./posts"

// TODO: integration tests should be deleted
// TODO: add fixtures
let authRepository: AuthRepository

beforeAll(() => {
  authRepository = new AuthRepository(coqualityAxiosClient)
})

describe("AuthRepository", () => {
    test("signUp", async() => {
        try {
            const posts = await authRepository.signUp(
                "mymail1@gmail.com",
                "mymail1",
                "KAKAO",
                "someToken"
            )

            console.log(posts)
        } catch (error) {
            console.error(error)
        }
    })
//   test("signIn", async () => {
//     try {
//       const posts = await authRepository.signIn(
//         "KAKAO",
//         "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"
//       )

//       console.log(posts)
//     } catch (error) {
//       console.error(error)
//     }

//     // expect(posts).toBeTruthy()
//     // expect(posts.length).toBeGreaterThanOrEqual(0)
//     // posts.forEach((post) => {
//     //   expect(post).toHaveProperty("id")
//     // })
//   })
})
