import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"
import LoginCard from "./LoginCard.svg"

type Props = {}

const Login: React.FC<Props> = ({}) => {
  return (
    <StyledWrapper className="common-container">
      <Link href={""}>
        <a className="login-card-wrapper">
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
