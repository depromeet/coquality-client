import React, { useRef, useState } from "react"

type UseDropdownType = () => [
  React.RefObject<HTMLDivElement>,
  boolean,
  () => void
]

function assertIsNode(e: EventTarget | null): asserts e is Node {
  if (!e || !("nodeType" in e)) {
    throw new Error(`Node expected`)
  }
}

const useDropdown: UseDropdownType = () => {
  const menuRef = useRef<HTMLDivElement>(null)
  const [isDropdownOpened, setIsDropdownOpened] = useState(false)

  const handleClick: (this: Window, e: MouseEvent) => void = (e) => {
    if (!menuRef.current) return
    assertIsNode(e.target)
    if (menuRef.current.contains(e.target) === false) {
      setIsDropdownOpened(false)
    }
  }

  const openDropdown = () => {
    setIsDropdownOpened(true)
    window.addEventListener("click", handleClick)
  }

  return [menuRef, isDropdownOpened, openDropdown]
}

export default useDropdown
