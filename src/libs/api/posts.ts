import coqualityAxiosClient from "./client"
import Repository from "./repository"

// TODO: move common types to types folder
export type PostPrimaryCategoryType =
  | "DESIGN"
  | "DEVELOPMENT"
  | "MARKETING"
  | "PM"
export type PostStatusType =
  | "DELETED"
  | "ISSUED"
  | "PRIVATE"
  | "TEMPORARY_SAVED"
export type PostSortType = "LATEST" | "VIEWS"

interface IGetPostByIdParams {
  userId?: number
}

export interface IPostType {
  id: number
  userId: number
  title: string
  contents: string
  thumbnail: null
  primaryCategory: string
  postStatusCode: string
  summary: string
  views: number
  commentCount: number
  createdAt: string
}

export interface ICreatePostRequest {
  contents: string
  primaryCategory: PostPrimaryCategoryType
  summary: string
  thumbnail: string
  title: string
  postStatus: PostStatusType
  tags: string[]
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

  public async createPost(params: ICreatePostRequest): Promise<IPostType> {
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

const postsRepository = new PostsRepository(
  coqualityAxiosClient,
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIyIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzA2NTEwNDIsImV4cCI6MTY3MzI0MzA0Mn0.xM13ga02kCNbWW02bSKSfc76hWC6C4fNUmAVxDrSJXmQhf91qwB7vCh74VPa-9inVobhHsDnqHI_HkFKOI5KLA"
)
export default postsRepository
