import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

type TProps = {
  children: React.ReactNode
  id?: string
}

const Portal: React.FC<TProps> = ({ children, id }) => {
  const portalElement = useRef<HTMLDivElement | null>(null)
  const [mount, setMount] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const elementId =
        id ?? `portal_${Math.random().toString(36).slice(2, 11)}`
      portalElement.current = document.createElement("div")
      portalElement.current.id = elementId
      document.body.appendChild(portalElement.current)
      setMount(true)
    }

    return () => {
      if (!portalElement.current || !portalElement.current.parentElement) return
      portalElement.current.parentElement.removeChild(portalElement.current)
      setMount(false)
    }
  }, [id])

  return mount && portalElement.current
    ? createPortal(children, portalElement.current)
    : null
}

export default Portal
