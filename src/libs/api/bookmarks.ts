import coqualityAxiosClient from "./client"
import Repository from "./repository"

export interface BookmarkType {
  postId: number
  title: string
  nickname: string
  createdAt: string
  thumbnail: string
  description: string
}

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
  public async getBookmarkPosts(): Promise<any> {
    const response = await this.client.get(`/bookmarks/`, {
      headers: { AUTH: this.authToken },
    })

    return response.data.data as any
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

const bookmarkRepository = new BookmarkRepository(
  coqualityAxiosClient,
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzM1MjIyMjMsImV4cCI6MTY3NjExNDIyM30.gpjAjEwxu-lKbCSoNn9IMXeycAGGTJMmUf7z7Gscvint4gfI0ZL4VhDzADRI0D75xMzRQksvojkhtm93Kf6L3w"
)
export default bookmarkRepository

// const bookmarksRepository = new BookmarksRepository(
//   coqualityAxiosClient,
//   // 기존 토큰 "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzI3NTIzNTIsImV4cCI6MTY3NTM0NDM1Mn0.vY4jYVKHw9pk8LvXu8WKlse9Ncjt9qeaosFFnydN0idewco6a1ZbWP6hu1PVStqUfN-JdhBfPe-ewrDtYOaqFg"
//   // 아래는 새로 받은 토큰
//   "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzM1MjIyMjMsImV4cCI6MTY3NjExNDIyM30.gpjAjEwxu-lKbCSoNn9IMXeycAGGTJMmUf7z7Gscvint4gfI0ZL4VhDzADRI0D75xMzRQksvojkhtm93Kf6L3w"
// )
// export default bookmarksRepository
