import axios from "axios"

const coqualityAxiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://52.79.56.145:8080/api/v1",
})

export default coqualityAxiosClient
