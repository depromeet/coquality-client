import React, { useState, useRef, useEffect, useCallback } from "react"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import useUpload from "@hooks/useUpload"
import styled from "@emotion/styled"
import { colors } from "@constants/colors"
import Button from "@components/inputs/Button"
import Textfield from "@components/inputs/Textfield"
import Link from "next/link"
import usersRepository, { ProfileModifyType } from "@libs/api/users"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/router"
import { useAuth } from "@hooks/useAuth"

type Props = {}

type ProfileModifyFormType = Pick<
  ProfileModifyType,
  "email" | "nickname" | "userSummary"
>

const ProfileEdit: React.FC<Props> = ({}) => {
  const router = useRouter()
  const auth = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileModifyFormType>()

  const [upload, file] = useUpload()
  const [imageSrc, setImageSrc] = useState("")
  const { data: myInfo } = useQuery(["userInfo"], () =>
    usersRepository.readMyInfo(auth.token)
  )

  const inputRef = useRef(null)
  const getBase64 = (file: File) =>
    new Promise((resolve, reject) => {
      if (file === null) {
        reject()
      }

      var reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        resolve(reader.result)
      }
      reader.onerror = function (error) {
        reject(error)
      }
    })

  const [inputs, setInputs] = useState({
    email: "기존 이메일",
    nickname: myInfo?.data?.nickname,
    userSummary: myInfo?.data?.userSummary,
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const mutation = useMutation({
    mutationFn: (params: ProfileModifyType) =>
      usersRepository.modifyUser(
        params.email,
        params.nickname,
        params.userSummary,
        auth.token
      ),
    onSuccess: (data, variables, context) => {
      router.push("/username")
      console.log(data)
    },
  })

  const onSubmit = (data: ProfileModifyFormType) => {
    mutation.mutate({
      email: data.email || inputs.email,
      nickname: data.nickname || inputs.nickname,
      userSummary: data.userSummary || inputs.userSummary,
    })
  }

  useEffect(() => {
    if (file) {
      getBase64(file)
        .then((src: any) => {
          setImageSrc(src)
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }, [file])

  return (
    <StyledWrapper className="common-container">
      <div className="header common-h1-sb">프로필 수정</div>
      <div className="profile-info">
        <div className="lt">
          <img src={imageSrc} ref={inputRef} alt="" />
        </div>
        <div className="rt">
          <Button className="img-btn upload-btn common-h5-sb" onClick={upload}>
            이미지 업로드
          </Button>
          <Button
            className="img-btn common-h5-sb"
            variant="outline"
            onClick={() => setImageSrc("")}
          >
            이미지 삭제
          </Button>
        </div>
      </div>
      <div className="inputs">
        <Textfield
          label="닉네임"
          {...register("nickname")}
          placeholder={inputs.nickname}
        />
        <Textfield
          label="이메일"
          {...register("email")}
          placeholder={inputs.email}
        />
        <Textfield
          label="한 줄 소개"
          {...register("userSummary")}
          placeholder={inputs.userSummary}
        />
      </div>
      <div className="btns">
        <Link href={"/username"}>
          <a>
            <Button onClick={handleSubmit(onSubmit)} className="submit-btn">
              수정완료
            </Button>
          </a>
        </Link>
      </div>
    </StyledWrapper>
  )
}

export default ProfileEdit

const StyledWrapper = styled.div`
  padding-top: 48px;
  .header {
    margin-bottom: 48px;
  }
  .profile-info {
    display: flex;
    gap: 20px;
    margin-bottom: 80px;
    .lt {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background-color: ${colors.grey400};
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .rt {
      display: flex;
      flex-direction: column;
      gap: 16px;
      .img-btn {
        padding-top: 10px;
        padding-bottom: 10px;
      }
      .upload-btn {
        background-color: ${colors.grey300};
      }
    }
  }
  .inputs {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 110px;
  }
  .btns {
    display: flex;
    justify-content: flex-end;
    .submit-btn {
      padding: 10px 98px;
    }
  }
`
