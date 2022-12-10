import { CoqualityAxiosClient } from "./client"

interface IGetPostsParams {
  sort: "LATEST"
  primaryCategory?: "DEVELOPMENT"
}

// TODO: move common types to types folder
type PostPrimaryCategoryType = "DESIGN" | "DEVELOPMENT" | "MARKETING" | "PM"
type PostStatusType = "DELETED" | "ISSUED" | "PRIVATE" | "TEMPORARY_SAVED"

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

export class PostsRepository {
  // client should be injected as singleton
  constructor(protected readonly client: CoqualityAxiosClient) {}

  public async getPosts(params: IGetPostsParams): Promise<IPostType[]> {
    const response = await this.client.get(`/posts`, { params })
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
    })

    return response.data.data as IPostType
  }

  public async createPost(params: IIssuePostRequest): Promise<IPostType> {
    const response = await this.client.post("/posts/", params)

    return response.data.data as IPostType
  }

  public async updatePost(
    id: number,
    params: IModifyPostRequest
  ): Promise<IPostType> {
    const response = await this.client.put(`/posts/${id}`, params)

    return response.data.data as IPostType
  }

  public async deletePost(id: number): Promise<void> {
    const response = await this.client.delete(`/posts/${id}`)
  }
}
