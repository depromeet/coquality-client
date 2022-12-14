import Repository from "./repository"

interface IComment {
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
  ): Promise<void> {
    await this.client.post(
      `/comments/`,
      {
        postId,
        contents,
      },
      { headers: { AUTH: this.authToken } }
    )
  }

  public async updateCommentOnPost(
    commentId: number,
    contents: string,
    postId: number,
    userId?: number
  ): Promise<IComment> {
    const response = await this.client
      .put(
        `/comments/${commentId}`,
        {
          postId,
          contents,
          userId,
        },
        { headers: { AUTH: this.authToken } }
      )
      .catch((error) => {
        console.log(error)
        return error
      })

    return response.data.data
  }
}
