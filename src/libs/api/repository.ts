import { AxiosInstance } from "axios"

export default class Repository {
  constructor(
    protected readonly client: AxiosInstance,
    protected authToken: string = ""
  ) {}

  public setAuthToken(token: string) {
    this.authToken = token
  }
}
