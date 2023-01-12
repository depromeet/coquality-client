import coqualityAxiosClient from "./client"
import Repository from "./repository"

export interface IUser {
  userId: number
  nickname: string
  profileImageUrl: string
  email: string
  userSummary: string | null
  userRank: string
}

export type PostSortType = "LATEST" | "VIEWS"

export interface IPostType {
  id: number
  userId: number
  title: string
  contents: string
  thumbnail: null
  primaryCategory: string
  postStatusCode: string
  summary: string
  views: number
  commentCount: number
  createdAt: string
}

export interface ProfileModifyType {
  email: string
  nickname: string
  userSummary: string
}

export class UsersRepository extends Repository {
  public async readUserInfo(id: number, authToken: string): Promise<IUser> {
    const response = await this.client.get(`/users/${id}/read`, {
      headers: { AUTH: authToken },
    })

    // TODO: 백엔드에 data.data가 아니라 data로 바꾸기
    return response.data as IUser
  }

  public async readMyInfo(authToken: string) {
    const response = await this.client.get(`/users/read`, {
      headers: { AUTH: authToken },
    })

    return response.data as any
  }

  public async modifyUser(
    email: string,
    nickname: string,
    userSummary: string,
    authToken: string
  ): Promise<void> {
    await this.client.put(
      `/users/update`,
      {
        email,
        nickname,
        userSummary,
      },
      { headers: { AUTH: authToken } }
    )
  }
}

const usersRepository = new UsersRepository(coqualityAxiosClient)

export default usersRepository
