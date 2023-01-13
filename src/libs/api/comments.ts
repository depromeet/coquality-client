import coqualityAxiosClient from "./client"
import Repository from "./repository"

export interface IComment {
  id: number
  contents: string
  userId: number
  postId: number
  createdAt: string
  nickname: string
}

export class CommentsRepository extends Repository {
  public async getCommentsOfPost(
    postId: number,
    authToken: string
  ): Promise<IComment[]> {
    const response = await this.client.get(`/comments/${postId}`, {
      headers: { AUTH: authToken },
    })

    return response.data.data
  }

  public async createCommentOnPost(
    postId: number,
    contents: string,
    authToken: string
  ): Promise<number> {
    const response = await this.client.post(
      `/comments/`,
      {
        postId,
        contents,
      },
      { headers: { AUTH: authToken } }
    )
    return response.data.data as number
  }

  public async updateCommentOnPost(
    commentId: number,
    contents: string,
    postId: number,
    authToken: string
  ): Promise<IComment> {
    const response = await this.client.put(
      `/comments/${commentId}`,
      {
        postId,
        contents,
      },
      { headers: { AUTH: authToken } }
    )

    return response.data.data
  }

  public async deleteCommentOnPost(
    postId: number,
    commentId: number,
    authToken: string
  ): Promise<void> {
    await this.client.delete(`/posts/${postId}/comments/${commentId}`, {
      headers: { AUTH: authToken },
    })
  }
}

const commentsRepository = new CommentsRepository(coqualityAxiosClient)

export default commentsRepository
