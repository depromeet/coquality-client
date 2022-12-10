//api/v1/posts?sort=LATEST&primaryCategory=DEVELOPMENT

import { axiosClient } from "./client"

export const getPosts = async () => {
  const response = await axiosClient.get(
    `/v1/posts?sort=LATEST&primaryCategory=DEVELOPMENT`
  )
  return response
}
