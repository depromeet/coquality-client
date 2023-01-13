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

export interface BookmarkType {
  postId: number
  title: string
  nickname: string
  createdAt: string
  thumbnail: null
  description: string
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
  clapCount: number
  commentCount: number
  createdAt: string
  tags: string[]
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
  public async getUserPosts(
    id: number,
    sort: PostSortType,
    authToken: string,
    primaryCategory?: PostPrimaryCategoryType
  ): Promise<IPostType[]> {
    const response = await this.client.get(`/posts/users/${id}`, {
      params: {
        sort,
        primaryCategory,
      },
      headers: { AUTH: authToken },
    })

    return response.data.data as IPostType[]
  }

  public async getPosts(
    sort: PostSortType,
    authToken: string,
    primaryCategory?: PostPrimaryCategoryType
  ): Promise<IPostType[]> {
    const response = await this.client.get("/posts", {
      params: {
        sort,
        primaryCategory,
      },
      headers: { AUTH: authToken },
    })

    return response.data.data as IPostType[]
  }

  public async getPostById(
    id: number,
    params: IGetPostByIdParams,
    authToken: string
  ): Promise<IPostType> {
    const response = await this.client.get(`/posts/${id}`, {
      params: {
        userId: params.userId,
      },
      headers: { AUTH: authToken },
    })

    return response.data.data as IPostType
  }

  public async createPost(
    params: ICreatePostRequest,
    authToken: string
  ): Promise<IPostType> {
    const response = await this.client.post("/posts/", params, {
      headers: { AUTH: authToken },
    })

    return response.data.data as IPostType
  }

  public async updatePost(
    id: number,
    params: IModifyPostRequest,
    authToken: string
  ): Promise<void> {
    await this.client.put(`/posts/${id}`, params, {
      headers: { AUTH: authToken },
    })
  }

  public async deletePost(id: number, authToken: string): Promise<void> {
    await this.client.delete(`/posts/${id}`, {
      headers: { AUTH: authToken },
    })

    // TODO: add result
  }

  public async getMyPosts(
    sort: PostSortType = "LATEST",
    authToken: string
  ): Promise<IPostType[]> {
    const response = await this.client.get("/posts/my/", {
      params: { sort: sort },
      headers: { AUTH: authToken },
    })
    return response.data.data as IPostType[]
  }
}

const postsRepository = new PostsRepository(coqualityAxiosClient)
export default postsRepository
