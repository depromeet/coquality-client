import axios from "axios"

const coqualityAxiosClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://api.co-quality.online/api/v1",
})

export const nextJSApiClient = axios.create()
export const kakaoClient = axios.create({
  baseURL: "https://kauth.kakao.com",
  headers: {
    "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  },
})

export default coqualityAxiosClient
