import Repository from "./repository"

interface IUser {
  nickname: string
  userId: number
}

// function logAndBypass<T>(x: T) {
//   console.log(x)
//   return x
// }

export class UsersRepository extends Repository {
  public async readMyInfo(): Promise<IUser> {
    const response = await this.client.get(`/users/read`, {
      headers: { AUTH: this.authToken },
    })

    // TODO: 백엔드에 data.data가 아니라 data로 바꾸기
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
