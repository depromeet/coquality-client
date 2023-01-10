import Button from "@components/inputs/Button"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import Link from "next/link"
import React from "react"
import Logo from "./svgs/Logo.svg"
import UserButton from "./UserButton"

type Props = {}

const Header = () => {
  return (
    <StyledWrapper>
      <div className="container common-container">
        <Link href={"/"}>
          <a>
            <Logo />
          </a>
        </Link>
        <div className="rt">
          <UserButton />
          {/* <Link href={"/login"}>
            <a>
              <Button className="login-btn" variant="outline">
                로그인
              </Button>
            </a>
          </Link> */}
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
    .rt {
      display: flex;
      align-items: center;
      gap: 5px;

      .login-btn {
        outline: 1px solid white;
        color: white;
        height: 40px;
      }
    }
  }

  background-color: ${colors.grey800};
`
