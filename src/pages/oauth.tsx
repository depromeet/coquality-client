import { Box, Button, Flex, Spinner, Text } from "@chakra-ui/react"
import Layout from "@components/Layout"
import { colors } from "@constants/colors"
import authRepository from "@libs/api/auth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const OauthPage = () => {
  const router = useRouter()

  useEffect(() => {
    if (location.search) {
      setTimeout(() => {
        router.push(`/signup${location.search}`)
      }, 500)
    } else {
      alert("오류!!")
    }
  }, [])

  return (
    <Layout title="로그인 중...">
      <Flex
        minW="screen"
        minHeight="100vh"
        display="flex"
        flexDirection="column"
        gap="8"
        alignItems="center"
        justifyContent="center"
      >
        <Text>잠시만 기다려주세요...</Text>
        <Spinner color={colors.primary600} size="xl" thickness="6px"></Spinner>
      </Flex>
      {/* 로그인 진행 중입니다...<br></br>
      인가 코드: {router.query.code}
      <br></br>
      엑세스 토큰: {JSON.stringify(accessToken)} */}
    </Layout>
  )
}

export default OauthPage
