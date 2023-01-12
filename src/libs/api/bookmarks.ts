import coqualityAxiosClient from "./client"
import Repository from "./repository"

export class BookmarkRepository extends Repository {
  public async bookmarkCheck(id: number): Promise<any> {
    const response = await this.client.get(`/bookmarks/${id}/check`, {
      headers: { AUTH: this.authToken },
    })

    return response.data.data
  }
  public async addBookmark(postId: number, userId: number): Promise<any> {
    const response = await this.client.post(
      `/bookmarks/${postId}`,
      { id: userId },
      {
        headers: { AUTH: this.authToken },
      }
    )

    return response.data.data
  }
  public async removeBookmark(id: number): Promise<any> {
    const response = await this.client.delete(`/bookmarks/${id}`, {
      headers: { AUTH: this.authToken },
    })

    return response.data.data
  }
  public async updateBookmark(id: number, description: string): Promise<any> {
    const response = await this.client.put(
      `/bookmarks/${id}`,
      { description },
      {
        headers: { AUTH: this.authToken },
      }
    )

    return response.data.data
  }
  public async removeAllBookmark(): Promise<any> {
    const response = await this.client.delete(`/bookmarks/all`, {
      headers: { AUTH: this.authToken },
    })

    return response.data.data
  }
}

const bookmarkRepository = new BookmarkRepository(coqualityAxiosClient)
export default bookmarkRepository
