import { AxiosInstance } from "axios"

export default class Repository {
  client: AxiosInstance

  constructor(client: AxiosInstance) {
    this.client = client
  }
}
