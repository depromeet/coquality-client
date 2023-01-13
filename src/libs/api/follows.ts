import { AxiosError } from "axios"
import Repository from "./repository"
import coqualityAxiosClient from "./client"

export class FollowsRepository extends Repository {
<<<<<<< HEAD
  public async followUser(
    targetUserId: number,
    authToken: string
  ): Promise<void> {
=======
  public async followUser(targetUserId: number): Promise<void> {
>>>>>>> develop
    await this.client
      .post(`/follows/${targetUserId}`, {}, { headers: { AUTH: authToken } })
      
  }

  public async unfollowUser(
    targetUserId: number,
    authToken: string
  ): Promise<void> {
    await this.client
      .delete(`/follows/${targetUserId}`, {
        headers: { AUTH: authToken },
      })
      
  }

  public async getFollowerCount(authToken: string): Promise<number> {
    const response = await this.client
      .get(`/follows`, {
        headers: { AUTH: authToken },
      })
      

    return response.data.data.followerCount
  }

  public async getFollowingCount(authToken: string): Promise<number> {
    const response = await this.client
      .get(`/follows`, {
        headers: { AUTH: authToken },
      })
      

    return response.data.data.followerCount
  }
}

<<<<<<< HEAD
const followsRepository = new FollowsRepository(coqualityAxiosClient)
export default followsRepository
=======
const followsRepository = new FollowsRepository(
  coqualityAxiosClient,
)
export default followsRepository
>>>>>>> develop
