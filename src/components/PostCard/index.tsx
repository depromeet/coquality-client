import React from "react"
import Link from "next/link"

import Tag from "@components/Tag"
import { IPostType } from "@libs/api/posts"

import DefaultImg from "./DefaultImg.svg"
import StyledWrapper from "./index.styled"
import MessageIcon from "./MessageIcon.svg"
import ViewIcon from "./ViewIcon.svg"
import { toStringByFormatting } from "@libs/utils/time"
import Image from "next/image"

// TODO: Tag, Username, CommentCount 없음
// TODO : username 나오면 Link 적용

type Props = {
  data: IPostType
}

const PostCard: React.FC<Props> = ({ data }) => {
  const createdAt = toStringByFormatting(new Date(data.createdAt), ".")
  return (
    <StyledWrapper>
      <div className="lt">
        <div className="top">
          <Link href={`/${data.userId}/${data.id}`}>
            <a className="title common-h2-sb">{data.title}</a>
          </Link>
          <div className="sub-title common-h4-rg">{data.summary}</div>
        </div>
        <div className="bottom">
          <div className="tag-list">
            <Tag>Tag</Tag>
            <Tag>Tag</Tag>
            <Tag>Tag</Tag>
          </div>
          <div className="footer common-h6-rg">
            <div className="lt">Jay | {createdAt}</div>
            <div className="rt">
              <div className="count">
                <ViewIcon />
                {data.views}
              </div>
              <div className="count">
                <MessageIcon />
                51
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rt">
        {data.thumbnail ? (
          <Image src={data.thumbnail} width={190} height={190} />
        ) : (
          <DefaultImg />
        )}
      </div>
    </StyledWrapper>
  )
}

export default PostCard
