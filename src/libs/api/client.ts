import axios from "axios"

const coqualityAxiosClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "http://ec2-15-165-142-212.ap-northeast-2.compute.amazonaws.com:8080/api/v1",
})

export default coqualityAxiosClient
