import { kakaoClient } from "@libs/api/client"
import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  kakaoClient.post("/oauth/token", req.body).then((response) => {
    res.status(200).json(response.data)
  }).catch(error => {
    console.log(error.response.data)
  })
}
