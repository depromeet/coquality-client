import {
  Avatar,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
type Props = {};

interface ICommentProps {
  authorName: string;
  authorThumbnailUrl: string;
  content: string;
  publishedAt: Date;
}

const Comment: React.FC<ICommentProps> = (props) => {
  const { authorName, authorThumbnailUrl, content, publishedAt } = props;
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
  );
};

const Slug: React.FC<Props> = ({}) => {
  const [comments, setComments] = useState<ICommentProps[]>([
    {
      authorName: "정시원",
      authorThumbnailUrl: "https://picsum.photos/50/50",
      content: "lorem",
      publishedAt: new Date(),
    },
    {
      authorName: "이상민",
      authorThumbnailUrl: "https://picsum.photos/50/50",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, velit expedita eveniet unde quidem nostrum voluptate atque repudiandae a non at aliquam asperiores laudantium ducimus, earum iste itaque laborum ratione!",
      publishedAt: new Date(),
    },
  ]);

  
  return (
    <Container>
      <Heading fontSize="xl">
        지금 연봉 10배가 오릅니다: '네트워킹 드리븐'으로 일하기
      </Heading>
      <Heading fontSize="md">
        인지심리학자가 UX 용어 첫 사용, 그 이유는?
      </Heading>
      <Flex display="flex" flexDirection="row">
        <Box mr="2">view 356</Box>
        <Box>2022.10.25</Box>
      </Flex>
      <Divider></Divider>
      <Text py="8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum natus ab
      </Text>
      <Divider></Divider>
      <Text>
        <b>20</b>개의 댓글
      </Text>
      {comments.map(comment => <Comment {...comment} />)}
    </Container>
  );
};

export default Slug;
