import axios from "axios"

const host = process.env.NEXT_PUBLIC_API_HOST || "/"

export const axiosClient = axios.create({
  baseURL: "http://ec2-15-165-142-212.ap-northeast-2.compute.amazonaws.com:8080/api",
  // withCredentials: true,
})
