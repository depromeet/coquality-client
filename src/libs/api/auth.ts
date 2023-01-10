import coqualityAxiosClient from "./client"
import Repository from "./repository"

export class AuthRepository extends Repository {
  public async signUp(
    email: string,
    nickname: string,
    socialType: string,
    token: string
  ) {
    return coqualityAxiosClient.post("/auth/signup", {
      email,
      nickname,
      socialType,
      token,
    })
  }

  public async signIn(socialType: string, token: string) {
    return coqualityAxiosClient.post("/api/v1/auth/singin", { socialType, token })
  }
}

const authRepository = new AuthRepository(coqualityAxiosClient)

export default authRepository
