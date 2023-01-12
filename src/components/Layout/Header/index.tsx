import { Flex, Text } from "@chakra-ui/react"
import Button from "@components/inputs/Button"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import { useAuth } from "@hooks/useAuth"
import authRepository from "@libs/api/auth"
import Link from "next/link"
import React, { useEffect } from "react"
import Logo from "./svgs/Logo.svg"
import UserButton from "./UserButton"

type Props = {}

const Header = () => {
  const auth = useAuth()

  return (
    <StyledWrapper>
      <div className="container common-container">
        <Link href={"/"}>
          <a>
            <Logo />
          </a>
        </Link>
        <div className="rt">
          <Flex
            direction={"row"}
            alignItems="center"
            justifyContent="center"
            gap="4"
          >
            {auth.isLoggedIn ? (
              <>
                <Text color="white">{auth?.userInfo?.nickname}</Text>
                <UserButton />
                <a>
                  <Button
                    className="login-btn"
                    variant="outline"
                    onClick={() => {
                      auth.logout()
                    }}
                  >
                    로그아웃
                  </Button>
                </a>
              </>
            ) : (
              <Link href={"/login"}>
                <a>
                  <Button className="login-btn" variant="outline">
                    로그인
                  </Button>
                </a>
              </Link>
            )}
          </Flex>
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
