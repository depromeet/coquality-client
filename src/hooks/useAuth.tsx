import Repository from "@libs/api/repository"
import React, { useEffect } from "react"

export type AuthContextType = {
  token: string
  isLoggedIn: boolean
}

export const AuthContext = React.createContext<AuthContextType>({
  token: "",
  isLoggedIn: false,
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
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
