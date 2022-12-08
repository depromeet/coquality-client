import { Button } from "@chakra-ui/react"
import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledWrapper>
      <div className="container common-container">
        <Link href={"/"}>
          <a className="logo">COQUALITY</a>
        </Link>
        <div className="rt">
          <Button colorScheme="primary" borderRadius={50} variant="outline">
            로그인
          </Button>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Header

const StyledWrapper = styled.div`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo {
      font-weight: 700;
      font-size: 20px;
    }
  }

  background-color: white;
`
