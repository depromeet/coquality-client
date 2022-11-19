import { Button } from "@chakra-ui/react"
import styled from "@emotion/styled"
import React from "react"

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledWrapper>
      <div className="container common-container">
        <div className="logo">COQUALITY</div>
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
