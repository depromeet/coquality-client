import axios from "axios"

const coqualityAxiosClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://api.co-quality.online/api/v1",
})

export default coqualityAxiosClient
