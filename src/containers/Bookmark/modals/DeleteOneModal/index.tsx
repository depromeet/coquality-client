import Button from "@components/inputs/Button"
import Modal, { ModalProps } from "@components/Modal"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import React from "react"

interface Props extends ModalProps {}

const DeleteAllModal: React.FC<Props> = ({ ...props }) => {
  return (
    <Modal {...props}>
      <StyledWrapper>
        <div className="top">
          <div className="common-h2-sb">정말로 삭제하시겠습니까?</div>
          <div className="common-h5-rg">삭제한 글은 복구할 수 없습니다.</div>
        </div>
        <div className="bottom">
          <Button className="cancle btn" variant="outline">
            취소
          </Button>
          <Button className="btn">삭제</Button>
        </div>
      </StyledWrapper>
    </Modal>
  )
}

export default DeleteAllModal

const StyledWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%; 
  width: 448px;
  height: 246px;
  background-color: white;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  justify-content: space-between;
  text-align: center;
  .top > .common-h5-rg { 
    margin-top: 12px;
  }
  .bottom {
    display: flex;
    gap: 15px;
    .cancle {
      outline: 1px solid ${colors.grey500};
      color: ${colors.grey500};
    }
    .btn {
      width: 168px;
    }
  }
`
