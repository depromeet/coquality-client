import React from "react"
import {
  Flex,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Divider,
} from "@chakra-ui/react"
import { useQuery } from "@tanstack/react-query"
import { getPosts } from "@libs/api/posts"

type Props = {}

const PostPreview: React.FC<Props> = () => {
  const { data, isLoading, error } = useQuery(["posts"], getPosts, {
    retry: false,
  })

  console.log(data, isLoading, error)

  return (
    <>
      <Flex direction="row" py="8" gap="8">
        <Flex direction="column" flex="1" justifyContent="space-between">
          <Flex direction="column">
            <Heading size="md">프로젝트 관리를 위한 JIRA 활용기</Heading>
            <Text>
              신규 프로젝트를 효과적으로 관리하기 위한 애자일 도구인 JIRA의 사용
              경험에 대해 소개합니다.
            </Text>
          </Flex>
          <Flex direction="row" justifyContent="space-between">
            <small>JAY|2022.02.05</small>
            <Flex direction="row" gap="2">
              <small>356 views</small>
              <small>12 comments</small>
            </Flex>
          </Flex>
        </Flex>
        <Image src="https://picsum.photos/150/150" rounded="2xl"></Image>
      </Flex>
      <Divider></Divider>
    </>
  )
}

const Feed: React.FC<Props> = (props) => {
  return (
    <Flex direction="column" py="16" className="common-container">
      <Heading size="lg" pb="4">
        당신을 위한 하이 퀄리티 글 👍🏻
      </Heading>
      <Tabs>
        <TabList>
          <Tab>전체</Tab>
          <Tab>개발</Tab>
          <Tab>디자인</Tab>
          <Tab>기획/PM/PO</Tab>
          <Tab>광고/마케팅</Tab>
        </TabList>
        <TabPanels>
          <TabPanel p="0">
            <Flex direction="row" justifyContent="flex-end" p="8">
              조회순
            </Flex>
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
            <PostPreview />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}

export default Feed
