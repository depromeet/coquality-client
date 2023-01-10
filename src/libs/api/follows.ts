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
  followerCount: number
  followingCount: number
}

export class FollowsRepository extends Repository {
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

  public async getFollowerCount(): Promise<number> { 
    const response = await this.client
      .get(`/follows`, {
        headers: { AUTH: this.authToken },
      })
      .catch(logResponseErrorMessageAndBypass)

    return response.data.data.followerCount  
  } 

  public async getFollowingCount(): Promise<number> { 
    const response = await this.client
      .get(`/follows`, {
        headers: { AUTH: this.authToken },
      })
      .catch(logResponseErrorMessageAndBypass)

    return response.data.data.followerCount  
  } 
}

const followsRepository = new FollowsRepository(
  coqualityAxiosClient,
)
export default followsRepository