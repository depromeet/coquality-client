import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Textarea,
} from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
type Props = {}

interface ICommentProps {
  authorName: string
  authorThumbnailUrl: string
  content: string
  publishedAt: string
}

interface PostType {
  title: string
  contents: string
  primaryPostCategoryCode: string
  summary: string
  views: number
}

const API_URL = "https://cba00c95-fc24-476e-87dc-0657339092eb.mock.pstmn.io"

const Comment: React.FC<ICommentProps> = (props) => {
  const { authorName, authorThumbnailUrl, content, publishedAt } = props
  return (
    <Box p="2">
      <Flex direction="row">
        <Flex direction="column" mr="2">
          <Avatar src={authorThumbnailUrl}></Avatar>
        </Flex>
        <Flex direction="column" flex={1}>
          <Heading fontSize="sm">{authorName}</Heading>
          <Text fontSize="md">{content}</Text>
        </Flex>
        <Flex direction="column">
          <Text fontSize="xs">{publishedAt.toLocaleString()}</Text>
        </Flex>
      </Flex>
    </Box>
  )
}

// const fetchComments = (postId) => {
//   return axios
//     .get(`/api/v1/posts/${postId}/comments`)
//     .then((response) => response.data);
// };

const ArticlePageContainer: React.FC<Props> = ({}) => {
  const [comments, setComments] = useState<ICommentProps[]>([
    {
      authorName: "정시원",
      authorThumbnailUrl: "https://picsum.photos/50/50",
      content: "lorem",
      publishedAt: "Date",
    },
    {
      authorName: "이상민",
      authorThumbnailUrl: "https://picsum.photos/50/50",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, velit expedita eveniet unde quidem nostrum voluptate atque repudiandae a non at aliquam asperiores laudantium ducimus, earum iste itaque laborum ratione!",
      publishedAt: "Date",
    },
  ])

  const [post, setPost] = useState<PostType>()

  useEffect(() => {
    axios
      .get(API_URL + "/api/v1/posts/{postId}")
      .then((response) => response.data)
      .then((data) => {
        setPost(data.data)
      })
  }, [])

  return (
    <Flex direction="row" gap="8" className="common-container" py="16">
      <Flex direction="column" flex="2">
        <Heading fontSize="xl" mb="2">
          {post?.title}
        </Heading>
        <Heading fontSize="md" mb="2">
          {post?.summary}
        </Heading>
        <Flex display="flex" flexDirection="row">
          <Box mr="2">view 356</Box>
          <Box>2022.10.25</Box>
        </Flex>
        <Divider></Divider>
        <Text py="8">{post?.contents}</Text>
        <Divider></Divider>
        <Text>20개의 댓글</Text>
        <Flex py="4" direction="column" gap="2">
          <Flex direction="row">
            <Textarea
              placeholder="댓글 작성이 어렵다면 간단한 이모티콘으로 생각을 표현해보세요!"
              border="none"
            />
          </Flex>
          <Divider />
          <Flex direction="row" justifyContent="flex-end">
            <Button>작성 완료</Button>
          </Flex>
        </Flex>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </Flex>
      <Flex direction="column" flex="1" ml="2">
        <Avatar src="https://picsum.photos/200/200" size="xl" mb="4"></Avatar>
        <Heading size="md" mb="2">
          미진
        </Heading>
        <Text>3년차 공유 모빌리티 서비스 디자이너 ***입니다.</Text>
      </Flex>
    </Flex>
  )
}

export default ArticlePageContainer
