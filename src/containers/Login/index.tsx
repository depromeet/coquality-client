import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"
import LoginCard from "./LoginCard.svg"

type Props = {}

const JAVASCRIPT_KAKAO_TOKEN = "2da317ee2a180138f1aa7118e7f80611"

const Login: React.FC<Props> = ({}) => {
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
    <StyledWrapper className="common-container">
      <Link href={""}>
        <a
          className="login-card-wrapper"
          onClick={(e) => {
            e.preventDefault()
            handleAuthenticateButtonClick()
          }}
        >
          <LoginCard />
        </a>
      </Link>
    </StyledWrapper>
  )
}

export default Login

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  .login-card-wrapper {
    border-radius: 20px;
    overflow: hidden;
    svg {
      width: 630px;
      height: 600px;
    }
  }
`
