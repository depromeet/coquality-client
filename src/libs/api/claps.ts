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
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzI3NTIzNTIsImV4cCI6MTY3NTM0NDM1Mn0.vY4jYVKHw9pk8LvXu8WKlse9Ncjt9qeaosFFnydN0idewco6a1ZbWP6hu1PVStqUfN-JdhBfPe-ewrDtYOaqFg"
)
export default clapsRepository
