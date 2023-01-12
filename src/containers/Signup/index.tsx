import { Button } from "@components/inputs"
import { useAuth } from "@hooks/useAuth"
import React, { useEffect } from "react"
import Image from "next/image"
import { Flex } from "@chakra-ui/react"

type Props = {}

const JAVASCRIPT_KAKAO_TOKEN = "2da317ee2a180138f1aa7118e7f80611"

const Signup: React.FC<Props> = ({}) => {
  const { token } = useAuth()

  const handleAuthenticateButtonClick = () => {
    const kakao = (window as any).Kakao
    try {
      kakao.init(JAVASCRIPT_KAKAO_TOKEN)
    } catch (error) {
      console.warn(error)
    }

    const redirectUri = window.location.origin + "/oauth/"
    kakao.Auth.authorize({ redirectUri })
  }
  return (
    <Flex alignItems={"center"} justifyContent="center" minHeight="80vh">
      {/* <div>token: {token}</div> */}

      <Image
        src="/signup.svg"
        alt="signup"
        width={500}
        height={500}
        onClick={handleAuthenticateButtonClick}
      />
    </Flex>
  )
}

export default Signup

// 43I25sCu1PBSZw-IxwP8REImDVyc9HTBuUXMEgP4CiolEAAAAYWl0ih6 --
