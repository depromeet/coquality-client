import { useAuth } from "@hooks/useAuth"
import React, { FormEvent, useEffect, useState } from "react"
import {
  Card,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Input,
  Text,
  Spinner,
} from "@chakra-ui/react"
import { colors } from "@constants/colors"
import authRepository from "@libs/api/auth"
import { useRouter } from "next/router"

type Props = {}

const JAVASCRIPT_KAKAO_TOKEN = "2da317ee2a180138f1aa7118e7f80611"

const Signup: React.FC<Props> = ({}) => {
  const router = useRouter()
  const auth = useAuth()
  const [isLoading, setIsLoading] = useState(true)
  const [accessToken, setAccessToken] = useState("")
  const [email, setEmail] = useState("")
  const [nickname, setNickname] = useState("")

  const handleSubmit = async (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault()
    try {
      const data = await authRepository.signUp(
        email,
        nickname,
        "KAKAO",
        accessToken
      )
      auth.login(data.token)
    } catch (error) {
      alert("오류가 발생했습니다. 콘솔을 확인하세요")
      console.error(error)
    }
  }

  useEffect(() => {
    const f = async () => {
      const kakao = (window as any).Kakao
      try {
        kakao.init(JAVASCRIPT_KAKAO_TOKEN)
      } catch (e) {
        console.warn(e)
      }

      const ingaCode = window.location.search.replace("?code=", "")
      const redirectUri = window.location.origin + "/oauth/"

      // 인가 코드 -> 액세스 토큰 -> 코컬리티 토큰
      const data = await authRepository.requestAuthToken(
        ingaCode as string,
        redirectUri
      )

      const accessToken = data.access_token

      console.log({ accessToken })

      const userExists = await authRepository.userExists("KAKAO", accessToken)

      console.log({ userExists })

      if (userExists) {
        const coqualityToken = (
          await authRepository.signIn("KAKAO", accessToken)
        ).token
        console.log({ coqualityToken })
        auth.login(coqualityToken)
      } else {
      }

      // if (userExists) {
      //   router.push("/")
      // } else {
      //   setIsLoading(false)
      // }
    }
    f()
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Flex alignItems={"center"} justifyContent="center">
      <Card
        bg="black"
        color="white"
        py="52px"
        px="105px"
        as="form"
        mt="80px"
        onSubmit={handleSubmit}
        borderRadius="20px"
      >
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Text fontSize="32px" fontWeight="bold">
            코컬리티를 시작해 볼까요?{accessToken}
          </Text>
          <Text fontSize="20px">
            아래의 정보를 입력하고 하이 - 퀄리티를 만나보세요
          </Text>
          <Flex
            direction="column"
            alignItems="start"
            w="full"
            justifyContent="center"
            mt="83px"
          >
            <FormLabel>이메일</FormLabel>
            <FormControl>
              <Input
                type="email"
                required={true}
                placeholder="abcdefgh@gmail.com"
                focusBorderColor={colors.primary500}
                onChange={(event) => {
                  setEmail(event.target.value)
                }}
              ></Input>
            </FormControl>
          </Flex>
          <Flex
            direction="column"
            alignItems="start"
            w="full"
            justifyContent="center"
            mt="28px"
          >
            <FormLabel>닉네임</FormLabel>
            <FormControl>
              <Input
                type="text"
                required={true}
                placeholder="코컬리티에서 사용할 닉네임을 입력해 주세요"
                focusBorderColor={colors.primary500}
                onChange={(event) => {
                  setNickname(event.target.value)
                }}
              ></Input>
            </FormControl>
          </Flex>
          <Button
            type="submit"
            color="black"
            w="full"
            mt="83"
            padding="30px"
            fontSize="20px"
            backgroundColor={colors.primary500}
          >
            시작하기
          </Button>
        </Flex>
      </Card>
    </Flex>
  )
}

export default Signup

// 43I25sCu1PBSZw-IxwP8REImDVyc9HTBuUXMEgP4CiolEAAAAYWl0ih6 --
