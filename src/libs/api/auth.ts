import coqualityAxiosClient, { nextJSApiClient } from "./client"
import Repository from "./repository"

const REST_API_KEY = "77d93f4fb77ca8ebb52f1751aef5d252"

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
    return coqualityAxiosClient.post("/api/v1/auth/singin", {
      socialType,
      token,
    })
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
