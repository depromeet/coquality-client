import { kakaoClient } from "@libs/api/client"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.body)
  try {
    const response = await kakaoClient.post("/oauth/token", req.body)
    console.log("success!", response.data)
    res.status(200).json(response.data)
  } catch (error) {
    res.status(500).json(error)
  }
}
