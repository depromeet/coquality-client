import axios from "axios"

const host = process.env.NEXT_PUBLIC_API_HOST || "/"

export const axiosClient = axios.create({
  baseURL: "https://cba00c95-fc24-476e-87dc-0657339092eb.mock.pstmn.io/api",
  // withCredentials: true,
})
