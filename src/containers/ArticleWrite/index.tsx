import Button from "@components/inputs/Button"
import Select from "@components/inputs/Select"
import Tags from "@components/inputs/Tags"
import Textfield from "@components/inputs/Textfield"
import styled from "@emotion/styled"
import postsRepository, { ICreatePostRequest } from "@libs/api/posts"
import { useMutation } from "@tanstack/react-query"
import dynamic from "next/dynamic"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import PostStatusToggle from "./PostStatusToggle"

type ArticleWriteFormType = Pick<
  ICreatePostRequest,
  "title" | "summary" | "contents" | "primaryCategory" | "postStatus"
>

const ArticleEditor = dynamic(
  () => import("@components/inputs/ArticleEditor"),
  {
    ssr: false,
  }
)

type Props = {}

const ArticleWrite: React.FC<Props> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ArticleWriteFormType>()
  const mutation = useMutation({
    mutationFn: postsRepository.createPost,
  })

  const onSubmit = (data: ArticleWriteFormType) => {
    console.log(data)
  }

  return (
    <StyledWrapper className="common-container">
      <div className="lt">
        <Textfield
          className="title common-h1-sb"
          placeholder="제목"
          defaultValue=""
          {...register("title")}
        />
        <Textfield
          className="subtitle common-h3-rg"
          placeholder="소제목"
          defaultValue=""
          {...register("summary")}
        />
        <ArticleEditor defaultValue="" {...register("contents")} />
      </div>
      <div className="rt">
        <div className="btns">
          <Button variant="outline">임시 저장</Button>
          <Button onClick={handleSubmit(onSubmit)}>발행하기</Button>
        </div>
        <div className="is-public">
          <div className="label common-h3-sb">공개 여부</div>
          <PostStatusToggle {...register("postStatus")} />
        </div>
        <div className="thumbnail">
          <div className="label common-h3-sb">썸네일</div>
          <div className="img">
            <Button className="btn">업로드하기</Button>
          </div>
        </div>
        <div className="category">
          <div className="label common-h3-sb">카테고리</div>
          <Select {...register("primaryCategory")}>
            <option value="DEVELOPMENT">개발</option>
            <option value="DESIGN">디자인</option>
            <option value="PM">기획/PM/PO</option>
            <option value="MARKETING">마케팅</option>
          </Select>
        </div>
        <div className="tag">
          <div className="label common-h3-sb">태그</div>
          <Tags disabled />
          {/* <Tags {...register("tags")} /> */}
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ArticleWrite

const StyledWrapper = styled.div`
  padding-top: 80px;
  display: grid;
  grid-template-columns: minmax(0, 622px) minmax(0, 348px);
  justify-content: space-between;
  > .lt {
    .title {
      input {
        padding: 0;
        border: none;
      }
    }
    .subtitle {
      input {
        padding: 16px 0;
        border: none;
      }
    }
  }
  > .rt {
    .btns {
      display: flex;
      gap: 10px;
      margin-bottom: 60px;
      > * {
        width: 100%;
      }
    }
    .is-public {
      margin-bottom: 30px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    > .thumbnail {
      .label {
        margin-bottom: 10px;
      }
      .img {
        width: 100%;
        height: 208px;
        background: linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.2) -3.74%,
            rgba(0, 0, 0, 0) 50%
          ),
          #dddddd;
        border-radius: 10px;
        padding: 16px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin-bottom: 30px;
        .btn {
          background-color: white;
        }
      }
    }
    > .category {
      margin-bottom: 30px;
      .label {
        margin-bottom: 10px;
      }
    }
    > .tag {
      margin-bottom: 30px;
      .label {
        margin-bottom: 10px;
      }
    }
  }
`
