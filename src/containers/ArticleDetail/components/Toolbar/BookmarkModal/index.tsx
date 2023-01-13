import { Button, Textarea } from "@components/inputs"
import Modal, { ModalProps } from "@components/Modal"
import { colors } from "@constants/colors"
import styled from "@emotion/styled"
import { useAuthInjection } from "@hooks/useAuth"
import bookmarkRepository from "@libs/api/bookmarks"
import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import React, { useState } from "react"
import CloseButton from "./CloseButton.svg"

interface Props extends ModalProps {
  postTitle?: string
  bookmarkId?: number
}

const BookmarkModal: React.FC<Props> = ({
  bookmarkId = 0,
  postTitle,
  onClose,
  ...props
}) => {
  const router = useRouter()
  const postId = +`${router.query["post-id"]}`
  const userId = +`${router.query["username"]}`
  const [input, setInput] = useState("")
  const authInjectedBookmarkRepository = useAuthInjection(bookmarkRepository)

  const updateBookmarkMutation = useMutation({
    mutationFn: ({
      bookmarkId,
      input,
    }: {
      bookmarkId: number
      input: string
    }) => authInjectedBookmarkRepository.updateBookmark(bookmarkId, input),
  })

  const handleClick = () => {
    updateBookmarkMutation.mutate({
      bookmarkId,
      input,
    })
    setInput("")
    onClose && onClose()
  }

  return (
    <Modal onClose={onClose} {...props}>
      <StyledWrapper>
        <div className="top">
          <div className="lt common-h5-rg">
            {`'${postTitle}'`}를 북마크에 저장했어요.
          </div>
          <div className="close-btn" onClick={onClose}>
            <CloseButton />
          </div>
        </div>
        <Textarea
          className="mid common-h5-rg"
          placeholder="저장한 글에 메모를 작성해보세요 :)"
          maxLength={150}
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="btm">
          <div className="lt">{input.length}/150</div>
          <Button
            className="rt common-h5-rg"
            variant="outline"
            onClick={handleClick}
          >
            {input.length > 0 ? "저장하기" : "건너뛰기"}
          </Button>
        </div>
      </StyledWrapper>
    </Modal>
  )
}

export default BookmarkModal

const StyledWrapper = styled.div`
  position: fixed;
  top: 100%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, calc(-100% - 100px));

  color: white;
  background: rgba(28, 31, 29, 0.95);
  border-radius: 12px;
  padding: 20px;

  width: 619px;

  .top {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close-btn {
      cursor: pointer;
    }
  }
  .mid {
    padding: 12px 16px;
    background-color: ${colors.grey600};
    margin-bottom: 12px;
    &::placeholder {
      color: ${colors.grey400};
      font-weight: 300;
    }
  }
  .btm {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .lt {
      color: ${colors.grey400};
    }
    .rt {
      outline: 1px solid white;
      padding: 8px 20px;
    }
  }
`
