import Portal from "@components/Portal"
import { css } from "@emotion/react"
import styled from "@emotion/styled"
import { fadeIn, fadeOut, leftIn, leftOut } from "@styles/keyframes"
import React, { ReactNode, useEffect, useState } from "react"

type TAnimation = "left" | "fade" | "bottom"

export interface IFModalProps {
  children?: ReactNode
  open?: boolean
  onClose?: () => void
  className?: string
  animation?: TAnimation
}

/**
 * @todo onClose 애니메이션 및 root 스크롤 방지 적용 필요합니다.
 */
const Modal: React.FC<IFModalProps> = ({
  children,
  open = false,
  onClose = () => {},
  animation = "fade",
}) => {
  const [openAnimationEnded, setOpenAnimationEnded] = useState(false)

  useEffect(() => {
    if (open) {
      setOpenAnimationEnded(false)
    }
  }, [open])

  const handleAnimationEnd = () => {
    if (openAnimationEnded) {
      onClose()
    }
  }

  if (!open) return null
  return (
    <Portal>
      <StyledWrapper
        animation={animation}
        openAnimationEnded={openAnimationEnded}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="dimmed" onClick={() => setOpenAnimationEnded(true)} />
        <div onClick={(e) => e.stopPropagation()} className="content">
          {children}
        </div>
      </StyledWrapper>
    </Portal>
  )
}

export default Modal

const StyledWrapper = styled.div<{
  animation: TAnimation
  openAnimationEnded: boolean
}>`
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 10;
  position: fixed;
  overflow-x: hidden;
  overflow-y: scroll;
  ${({ openAnimationEnded, animation }) => {
    if (animation === "fade")
      return css`
        animation: ${openAnimationEnded ? fadeOut : fadeIn} 0.15s;
      `
    if (animation === "left")
      return css`
        animation: ${openAnimationEnded ? leftOut : leftIn} 0.15s;
      `
  }}
  .dimmed {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background: rgba(0, 0, 0, 0.7);
  }
`
