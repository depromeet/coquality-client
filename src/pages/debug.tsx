import React from "react"
import { useAuth } from "../hooks/useAuth"

const Debug = () => {
  const auth = useAuth()
  return <div>{JSON.stringify(auth)}</div>
}

export default Debug
