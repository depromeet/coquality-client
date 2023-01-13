import coqualityAxiosClient, { kakaoClient, nextJSApiClient } from "./client"
import Repository from "./repository"

const REST_API_KEY = "77d93f4fb77ca8ebb52f1751aef5d252"

export class AuthRepository extends Repository {
  public async signUp(
    email: string,
    nickname: string,
    socialType: string,
    token: string
  ) {
    const response = await coqualityAxiosClient.post("/auth/signup", {
      email,
      nickname,
      socialType,
      token,
    })

    return response.data.data
  }

  public async signIn(socialType: string, token: string) {
    const response = await coqualityAxiosClient.post("/auth/singin", {
      socialType,
      token,
    })

    return response.data.data
  }

  public async userExists(socialType: string, token: string): Promise<boolean> {
    try {
      await coqualityAxiosClient.post("/auth/singin", {
        socialType,
        token,
      })

      return true
    } catch (error: any) {
      return false
    }
  }

  public async requestAuthToken(ingaToken: string, redirectUri: string) {
    const response = await nextJSApiClient.post("/api/access_token", {
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: redirectUri,
      code: ingaToken,
    })

    return response.data
  }
}

const authRepository = new AuthRepository(coqualityAxiosClient)

export default authRepository
