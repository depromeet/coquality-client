import coqualityAxiosClient from "./client"
import Repository from "./repository"

export interface IComment {
  id: number
  contents: string
  userId: number
  postId: number
  createdAt: string
}

export class CommentsRepository extends Repository {
  public async getCommentsOfPost(postId: number): Promise<IComment[]> {
    const response = await this.client.get(`/comments/${postId}`, {
      headers: { AUTH: this.authToken },
    })

    return response.data.data
  }

  public async createCommentOnPost(
    postId: number,
    contents: string
  ): Promise<number> {
    const response = await this.client.post(
      `/comments/`,
      {
        postId,
        contents,
      },
      { headers: { AUTH: this.authToken } }
    )
    return response.data.data as number
  }

  public async updateCommentOnPost(
    commentId: number,
    contents: string,
    postId: number
  ): Promise<IComment> {
    const response = await this.client.put(
      `/comments/${commentId}`,
      {
        postId,
        contents,
      },
      { headers: { AUTH: this.authToken } }
    )

    return response.data.data
  }

  public async deleteCommentOnPost(
    postId: number,
    commentId: number
  ): Promise<void> {
    await this.client.delete(`/posts/${postId}/comments/${commentId}`, {
      headers: { AUTH: this.authToken },
    })
  }
}

const commentsRepository = new CommentsRepository(
  coqualityAxiosClient,
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzI3NTIzNTIsImV4cCI6MTY3NTM0NDM1Mn0.vY4jYVKHw9pk8LvXu8WKlse9Ncjt9qeaosFFnydN0idewco6a1ZbWP6hu1PVStqUfN-JdhBfPe-ewrDtYOaqFg"
)

export default commentsRepository
