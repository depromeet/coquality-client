import coqualityAxiosClient from "./client"
import Repository from "./repository"

interface IUser {
  map(arg0: (bookmark: any) => import("@emotion/react/jsx-runtime").JSX.Element): import("react").ReactNode 
  nickname: string
  userId: number
}

export class BookmarksRepository extends Repository {
  public async getBookmarkPosts(): Promise<IUser> {
    const response = await this.client.get(`/bookmarks/`, { 
      headers: { AUTH: this.authToken },
    })

    return response.data.data as IUser
  } 

  public async deleteBookmarks(id:number): Promise<void> {
    await this.client.delete(`/bookmarks/${id}`, {
      headers: { AUTH: this.authToken },
    })

    // TODO: add result
  }

  public async deleteAllBookmarks(): Promise<void> {
    await this.client.delete(`/bookmarks/all`, {
      headers: { AUTH: this.authToken },
    })

    // TODO: add result
  }
}

const bookmarksRepository = new BookmarksRepository(
  coqualityAxiosClient,
  // 기존 토큰 "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzI3NTIzNTIsImV4cCI6MTY3NTM0NDM1Mn0.vY4jYVKHw9pk8LvXu8WKlse9Ncjt9qeaosFFnydN0idewco6a1ZbWP6hu1PVStqUfN-JdhBfPe-ewrDtYOaqFg"
  // 아래는 새로 받은 토큰
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzM1MjIyMjMsImV4cCI6MTY3NjExNDIyM30.gpjAjEwxu-lKbCSoNn9IMXeycAGGTJMmUf7z7Gscvint4gfI0ZL4VhDzADRI0D75xMzRQksvojkhtm93Kf6L3w"
)
export default bookmarksRepository
