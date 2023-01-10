import coqualityAxiosClient from "./client"
import Repository from "./repository"

export class ClapsRepository extends Repository {
  public async clapPost(id: number): Promise<any> {
    const response = await this.client.post(`/claps/posts/${id}`, undefined, {
      headers: { AUTH: this.authToken },
    })

    return response.data.data
  }
}

const clapsRepository = new ClapsRepository(
  coqualityAxiosClient,
)
export default clapsRepository
