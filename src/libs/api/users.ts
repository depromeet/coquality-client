import coqualityAxiosClient from "./client"
import Repository from "./repository"

type IUser = any

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
  public async readUserInfo(id: number): Promise<IUser> {
    const response = await this.client.get(`/users/${id}/read`, {
      headers: { AUTH: this.authToken },
    })

    // TODO: 백엔드에 data.data가 아니라 data로 바꾸기
    return response.data as IUser
  }

  public async readMyInfo(): Promise<IUser> {
    const response = await this.client.get(`/users/read`, {
      headers: { AUTH: this.authToken },
    })

    return response.data as IUser
  }

  public async modifyUser(
    email: string,
    nickname: string,
    userSummary: string
  ): Promise<void> {
    await this.client.put(
      `/users/update`,
      {
        email,
        nickname,
        userSummary,
      },
      { headers: { AUTH: this.authToken } }
    )
  }
}

const usersRepository = new UsersRepository(coqualityAxiosClient)

export default usersRepository
