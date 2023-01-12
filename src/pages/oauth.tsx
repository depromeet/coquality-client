import { Box, Button } from "@chakra-ui/react"
import authRepository from "@libs/api/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const OauthPage = () => {
  const router = useRouter()
  const [code, setCode] = useState("")

  return (
    <div>
        <Box px="4" py="4">some box</Box>
      로그인 진행 중입니다...<br></br>
      인가 코드: {router.query.code}
      <div>
        <Button
          onClick={() => {
            authRepository
              .signIn("KAKAO", router.query.code as any)
              .then(console.log)
              .catch(console.error)
          }}
        >
          회원가입
        </Button>
      </div>
    </div>
  )
}

export default OauthPage
