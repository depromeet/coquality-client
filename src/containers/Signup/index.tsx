import { Button } from "@components/inputs"
import { useAuth } from "@hooks/useAuth"
import React, { useEffect } from "react"

type Props = {}

const kakaoToken = "77d93f4fb77ca8ebb52f1751aef5d252"
const redirectUri = "http://localhost:3000/oauth/"

const Signup: React.FC<Props> = ({}) => {
  const { token } = useAuth()

  const handleAuthenticateButtonClick = () => {
    const kakao = (window as any).Kakao
    try {
      kakao.init("77d93f4fb77ca8ebb52f1751aef5d252")
    } catch (error) {
      console.warn(error)
    }

    kakao.Auth.authorize({ redirectUri })
  }
  return (
    <div>
      <div>token: {token}</div>
      <Button onClick={handleAuthenticateButtonClick}>Authenticate</Button>
    </div>
  )
}

export default Signup
