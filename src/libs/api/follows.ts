import Repository from "./repository"
import coqualityAxiosClient from "./client"

export class FollowsRepository extends Repository {
  public async followUser(
    targetUserId: number,
    authToken: string
  ): Promise<void> {
    await this.client.post(
      `/follows/${targetUserId}`,
      {},
      { headers: { AUTH: authToken } }
    )
  }

  public async unfollowUser(
    targetUserId: number,
    authToken: string
  ): Promise<void> {
    await this.client.delete(`/follows/${targetUserId}`, {
      headers: { AUTH: authToken },
    })
  }

  public async getFollowerCount(userId: string, authToken: string): Promise<number> {
    const response = await this.client.get(`/follows/${userId}`, {
      headers: { AUTH: authToken },
    })

    return response.data.data.followerCount
  }

  public async getFollowingCount(userId: string, authToken: string): Promise<number> {
    const response = await this.client.get(`/follows/${userId}`, {
      headers: { AUTH: authToken },
    })

    return response.data.data.followingCount
  }
}

const followsRepository = new FollowsRepository(coqualityAxiosClient)
export default followsRepository
