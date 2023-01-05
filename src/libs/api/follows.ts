import { AxiosError } from "axios"
import Repository from "./repository"
import coqualityAxiosClient from "./client"

function logResponseErrorMessageAndBypass<T extends AxiosError>(x: T) {
  console.log((x.response as any)?.data?.message)
  throw x
  return x
}

interface IFollower {
  userId: number
  nickname: string
  profileImage: string
}

export class FollowsRepository extends Repository {
  public async getFollowerCount(userId: number): Promise<number> {
    const response = await this.client
      .get(`/follows/users/${userId}`, {
        headers: { AUTH: this.authToken },
      })
      .catch(logResponseErrorMessageAndBypass)

    return response.data.data
  }

  public async followUser(targetUserId: number): Promise<void> {
    await this.client
      .post(
        `/follows/${targetUserId}`,
        {},
        { headers: { AUTH: this.authToken } }
      )
      .catch(logResponseErrorMessageAndBypass)
  }

  public async unfollowUser(targetUserId: number): Promise<void> {
    await this.client
      .delete(`/follows/${targetUserId}`, {
        headers: { AUTH: this.authToken },
      })
      .catch(logResponseErrorMessageAndBypass)
  }

  public async getFollowers(userId: number): Promise<IFollower[]> {
    // TODO: api does not match REST API standard (suggest to change to /follows/users/:userId/followers)

    const response = await this.client
      .get(`/follows/users/followers/${userId}`, {
        headers: { AUTH: this.authToken },
      })
      .catch(logResponseErrorMessageAndBypass)

    return response.data.data as IFollower[]
  }

  public async getFollowings(userId: number): Promise<IFollower[]> {
    // TODO: api does not match REST API standard (suggest to change to /follows/users/:userId/followings)

    const response = await this.client
      .get(`/follows/users/followings/${userId}`, {
        headers: { AUTH: this.authToken },
      })
      .catch(logResponseErrorMessageAndBypass)

    return response.data.data as IFollower[]
  }
}

const followRepository = new FollowsRepository(
  coqualityAxiosClient,
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzI3NTIzNTIsImV4cCI6MTY3NTM0NDM1Mn0.vY4jYVKHw9pk8LvXu8WKlse9Ncjt9qeaosFFnydN0idewco6a1ZbWP6hu1PVStqUfN-JdhBfPe-ewrDtYOaqFg"
)
export default followRepository