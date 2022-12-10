//api/v1/posts?sort=LATEST&primaryCategory=DEVELOPMENT

import { axiosClient } from "./client"

interface IGetPostsParams {
  sort: "LATEST"
  primaryCategory?: "DEVELOPMENT"
}

type PostPrimaryCategoryType = "DESIGN" | "DEVELOPMENT" | "MARKETING" | "PM"
type PostStatusType = "DELETED" | "ISSUED" | "PRIVATE" | "TEMPORARY_SAVED"

export const getPosts = async (params: IGetPostsParams) => {
  const response = await axiosClient.get(`/v1/posts`, { params })
  return response.data.data as IPostType[]
}

interface IGetPostByIdParams {
  userId?: number
}

export interface IPostType {
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

export const getPostById = async (
  id: number,
  params: IGetPostByIdParams,
  authToken: string
): Promise<IPostType> => {
  const response = await axiosClient.get(`/v1/posts/${id}`, {
    params: {
      userId: params.userId,
    },
    headers: {
      AUTH: authToken,
    },
  })

  return response.data.data as IPostType
}

interface ICreatePostParams {
  contents: string
  primaryCategory: PostPrimaryCategoryType
  summary: string
  thumbnail: string
  title: string
}

export const createPost = async (
  params: ICreatePostParams,
  authToken: string
): Promise<void> => {
  const result = await axiosClient.post(
    "/v1/posts/",
    {
      issuePostRequest: params,
      // ...params
    },
    {
      headers: {
        AUTH: authToken,
      },
    }
  )

  return result.data
}

interface IUpdatePostParams {
  contents: string
  postStatus: PostStatusType
  primaryPostCategoryCode: PostPrimaryCategoryType
  summary: string
  thumbnail: string
  title: string
}

export const updatePost = async (
  id: number,
  params: IUpdatePostParams,
  authToken: string
): Promise<void> => {
  const result = await axiosClient.put(
    `/v1/posts/${id}`,
    {
      modifyPostRequest: params,
    },
    {
      headers: {
        AUTH: authToken,
      },
    }
  )
}
