import authRepository from "@libs/api/auth"
import Repository from "@libs/api/repository"
import usersRepository, { IUser } from "@libs/api/users"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

export interface AuthContextType {
  token: string
  isLoggedIn: boolean
  userInfo?: IUser
  login: (token: string) => void
  logout: () => void
}

export const AuthContext = React.createContext<AuthContextType>({} as any)

export const useAuth = () => {
  const { token, isLoggedIn, login, logout, userInfo } =
    React.useContext(AuthContext)
  return { token, isLoggedIn, login, logout, userInfo }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [token, setToken] = React.useState<string>("")
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)
  const [userInfo, setUserInfo] = React.useState<IUser>()

  // useEffect(() => {
  //   if (token) {
  //     usersRepository
  //       .readMyInfo(token)
  //       .then((user) => {
  //         console.info("updated user info. ", user)
  //         setUserInfo(user)
  //       })
  //       .catch(console.error)
  //   } else {
  //   }
  // }, [token]) // token이 변할 때마다 로그인/로그아웃
  useEffect(() => {
    const cachedToken = localStorage.getItem("token")
    if (cachedToken) {
      login(cachedToken)
    }
  }, [])

  const login = async (_token: string) => {
    setToken(_token)
    setIsLoggedIn(true)
    const { data: user } = await usersRepository.readMyInfo(_token)
    console.info("updated user info. ", user)
    setUserInfo(user)
    localStorage.setItem("token", _token)
    alert("로그인 되었습니다")
    router.push("/")
  }

  const logout = () => {
    setToken("")
    setIsLoggedIn(false)
    setUserInfo(undefined)
    localStorage.removeItem("token")
    alert("로그아웃 되었습니다")
    router.push("/")
  }

  const value = {
    token,
    isLoggedIn,
    userInfo,
    login,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
