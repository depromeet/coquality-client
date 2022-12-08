import { Button } from "@chakra-ui/react"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"
import Logo from "./svgs/Logo.svg"
import UserBtn from "./svgs/UserBtn.svg"

type Props = {}

const Header = (props: Props) => {
  return (
    <StyledWrapper>
      <div className="container common-container">
        <Link href={"/"}>
          <a>
            <Logo />
          </a>
        </Link>
        <div className="rt">
          <Link href={"/myprofile"}>
            <a>
              <UserBtn />
            </a>
          </Link>
          {/* <Button colorScheme="primary" borderRadius={50} variant="outline">
            로그인
          </Button> */}
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
  }

  background-color: ${colors.grey800};
`
