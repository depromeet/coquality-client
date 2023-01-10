import { useAuth } from "@hooks/useAuth"
import React from "react"

type Props = {}

const Signup: React.FC<Props> = ({}) => {
  const { token } = useAuth()
  return <div>token: {token}</div>
}

export default Signup
