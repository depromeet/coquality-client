import axios, { Axios } from "axios"

const host = process.env.NEXT_PUBLIC_API_HOST || "/"

// export const axiosClient = axios.create({
//   baseURL:
//     "http://ec2-15-165-142-212.ap-northeast-2.compute.amazonaws.com:8080/api/v1",
// })

// Singleton AxiosClient
export class CoqualityAxiosClient extends Axios {
  private static instance: CoqualityAxiosClient

  private constructor(baseURL: string, authToken: string) {
    super({ baseURL, headers: { AUTH: authToken } })
  }

  public static create(
    baseURL: string,
    authToken: string
  ): CoqualityAxiosClient {
    if (!CoqualityAxiosClient.instance) {
      const client = new CoqualityAxiosClient(baseURL, authToken)
      CoqualityAxiosClient.instance = client
    }

    return CoqualityAxiosClient.instance
  }

  public setAuthToken(authToken: string) {
    this.interceptors.request.use((requestConfig) => {
      return {
        headers: {
          ...requestConfig.headers,
          AUTH: authToken,
        },
      }
    })
  }
}


const coqualityAxiosClient = CoqualityAxiosClient.create(
  "http://ec2-15-165-142-212.ap-northeast-2.compute.amazonaws.com:8080/api/v1",
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"
)

export default coqualityAxiosClient