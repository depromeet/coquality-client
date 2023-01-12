import { Box, Button } from "@chakra-ui/react"
import authRepository from "@libs/api/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const OauthPage = () => {
  const router = useRouter()
  const [accessToken, setAccessToken] = useState("")

  return (
    <div>
      <Box px="4" py="4">
        some box
      </Box>
      로그인 진행 중입니다...<br></br>
      인가 코드: {router.query.code}
      <br></br>
      엑세스 토큰: {JSON.stringify(accessToken)}
      <div>
        <Button
          onClick={() => {
            const redirectUri = window.location.origin + "/oauth/"
            authRepository
              .requestAuthToken(router.query.code as string, redirectUri)
              .then((data) => {
                setAccessToken(data.access_token)
              })
              .catch(console.error)
          }}
        >
          엑세스 토큰 받기
        </Button>
      </div>
    </div>
  )
}

export default OauthPage
