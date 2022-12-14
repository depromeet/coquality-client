import { AxiosInstance } from "axios"

export default abstract class Repository {
  constructor(
    protected readonly client: AxiosInstance,
    protected authToken?: string
  ) {}
}
