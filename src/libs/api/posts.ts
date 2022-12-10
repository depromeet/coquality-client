import Repository from "./repository"

// TODO: move common types to types folder
type PostPrimaryCategoryType = "DESIGN" | "DEVELOPMENT" | "MARKETING" | "PM"
type PostStatusType = "DELETED" | "ISSUED" | "PRIVATE" | "TEMPORARY_SAVED"
type PostSortType = "LATEST" | "VIEWS"

interface IGetPostByIdParams {
  userId?: number
}

interface IPostType {
  id: number
  userId: number
  title: string
  thumbnail: null
  primaryCategory: string
  postStatusCode: string
  summary: string
  views: number
  commentCount: number
  createdAt: Date
}

interface IIssuePostRequest {
  contents: string
  primaryCategory: PostPrimaryCategoryType
  summary: string
  thumbnail: string
  title: string
}

interface IModifyPostRequest {
  contents: string
  postStatus: PostStatusType
  primaryPostCategoryCode: PostPrimaryCategoryType
  summary: string
  thumbnail: string
  title: string
}

export class PostsRepository extends Repository {
  public async getPosts(
    sort: PostSortType,
    primaryCategory?: PostPrimaryCategoryType
  ): Promise<IPostType[]> {
    const response = await this.client.get("/posts", {
      params: {
        sort,
        primaryCategory,
      },
      headers: { AUTH: this.authToken },
    })

    return response.data.data as IPostType[]
  }

  public async getPostById(
    id: number,
    params: IGetPostByIdParams
  ): Promise<IPostType> {
    const response = await this.client.get(`/posts/${id}`, {
      params: {
        userId: params.userId,
      },
      headers: { AUTH: this.authToken },
    })

    return response.data.data as IPostType
  }

  public async createPost(params: IIssuePostRequest): Promise<IPostType> {
    const response = await this.client.post("/posts/", params, {
      headers: { AUTH: this.authToken },
    })

    return response.data.data as IPostType
  }

  public async updatePost(
    id: number,
    params: IModifyPostRequest
  ): Promise<void> {
    await this.client.put(`/posts/${id}`, params, {
      headers: { AUTH: this.authToken },
    })
  }

  public async deletePost(id: number): Promise<void> {
    await this.client.delete(`/posts/${id}`, {
      headers: { AUTH: this.authToken },
    })

    // TODO: add result
  }

  public async getMyPosts(sort: PostSortType = "LATEST"): Promise<IPostType[]> {
    const response = await this.client.get("/posts/users/my/", {
      params: { sort: sort },
      headers: { AUTH: this.authToken },
    })
    return response.data.data as IPostType[]
  }
}
