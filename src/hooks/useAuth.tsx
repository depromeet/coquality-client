import Repository from "@libs/api/repository"
import React, { useEffect } from "react"

type SetBooleanType = (bool: boolean) => void
type SetStringType = (str: string) => void

export interface AuthContextType {
  token: string
  isLoggedIn: boolean
  setIsLoggedIn: SetBooleanType
  setToken: SetStringType
}

export const AuthContext = React.createContext<AuthContextType>({
  token: "",
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  setToken: () => {},
})

export const useAuth = () => {
  const { token, isLoggedIn } = React.useContext(AuthContext)
  return { token, isLoggedIn }
}

export function useAuthInjection<T extends Repository>(repository: T): T {
  const { token } = useAuth()
  repository.setAuthToken(token)
  return repository
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = React.useState<string>("")
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(true)

  useEffect(() => {
    setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwicm9sZSI6IlVTRVIiLCJpYXQiOjE2NzI3NTIzNTIsImV4cCI6MTY3NTM0NDM1Mn0.vY4jYVKHw9pk8LvXu8WKlse9Ncjt9qeaosFFnydN0idewco6a1ZbWP6hu1PVStqUfN-JdhBfPe-ewrDtYOaqFg"
    )
  }, [])

  const value = {
    token,
    isLoggedIn,
    setIsLoggedIn,
    setToken,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
