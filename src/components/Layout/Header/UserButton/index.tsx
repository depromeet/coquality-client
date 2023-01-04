import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import useDropdown from "@hooks/useDropdown"
import UserBtn from "./UserBtn.svg"
import Link from "next/link"
import React from "react"

type Props = {}

const UserButton = (props: Props) => {
  const [menuRef, open, handleDropDownBtn] = useDropdown()

  return (
    <StyledWrapper>
      <div ref={menuRef} className="btn">
        <UserBtn onClick={handleDropDownBtn} />
      </div>
      <div className="menu-list " data-open={open}>
        <Link href={"/username"}>
          <a className="menu common-h6-sb">내 프로필</a>
        </Link>
        <Link href={"/username/bookmark"}>
          <a className="menu common-h6-sb">저장한 글</a>
        </Link>
      </div>
    </StyledWrapper>
  )
}

export default UserButton

const StyledWrapper = styled.div`
  position: relative;
  z-index: 3;
  width: 40px;
  height: 40px;
  .btn {
    cursor: pointer;
  }
  .menu-list {
    display: none;
    position: absolute;
    top: calc(100% + 5px);
    right: 0;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    padding: 6px 0;
    text-align: center;
    white-space: nowrap;
    font-size: 12px;
    background-color: white;
    .menu {
      display: block;
      padding: 10px 24px;
      color: ${colors.grey600};
    }
    &[data-open="true"] {
      display: block;
    }
  }
`
