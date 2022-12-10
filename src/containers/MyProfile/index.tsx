import React from "react"
import Link from "next/link"
import {
  Box,
  Image,
  Button,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react"

type Props = {}

const MyProfile: React.FC<Props> = ({}) => {
  return (
    <div className="common-container">
      <Box
        display="flex"
        mt="104px"
        alignItems="center"
        flex-direction="row"
        position="absolute"
        w="1080px"
        h="163px"
        gap="20px"
      >
        <Image
          w="163px"
          h="163px"
          border="0"
          borderRadius="100%"
          src="https://bit.ly/dan-abramov"
          alt="Porfile Image"
        />
        <Box w="622px" h="116px">
          <Text
            alignSelf="stretch"
            ml="20px"
            position="absolute"
            h="48px"
            fontSize="32px"
            fontWeight="600"
            fontFamily="Pretendard"
            fontStyle="normal"
            lineHeight="130%"
            letterSpacing="-0.01em"
          >
            Jay
          </Text>
          <Text
            alignSelf="stretch"
            mt="56px"
            ml="20px"
            h="60px"
            order="1"
            color="#999999"
            fontWeight="400"
            fontSize="20px"
            fontFamily="Pretendard"
            fontStyle="normal"
            lineHeight="170%"
            letterSpacing="-0.01em"
            opacity="0.8"
          >
            안녕하세요 <br />
            3년차 공유 모빌리티 서비스 UI/UX 기획자입니다 :)
          </Text>
        </Box>
        <Link href="./mypage/edit">
          <Button
            display="flex"
            w="255px"
            h="44px"
            order="1"
            borderRadius="50px"
            color="white"
            bg="black"
            fontFamily="Pretendard"
            fontStyle="normal"
            fontSize="16px"
            fontWeight="600"
            variant="ghost"
          >
            <a>프로필 수정</a>
          </Button>
        </Link>
      </Box>
      <Tabs
        position="absolute"
        w="1080px"
        h="52px"
        mt="331px"
        left="calc(50%-1080px/2"
        top="331px"
        boxSizing="border-box"
        colorScheme="black"
      >
        <TabList>
          <Tab h="52px" fontWeight="600" fontSize="20px">
            내가 쓴 글
          </Tab>
          <Tab h="52px" fontWeight="600" fontSize="20px">
            내가 읽은 글
          </Tab>
        </TabList>

        <TabPanels mt="56px">
          <TabPanel>
            <Box
              display="flex"
              w="1080px"
              h="270px"
              borderBottom="1px solid #DDDDDD"
            >
              <Box display="flex" w="1080px" h="190px">
                <Box w="1080px" h="190px" display="flex">
                  <Box
                    position="relative"
                    gap="10px"
                    padding="4px"
                    w="80px"
                    h="32px"
                    top="41px"
                    borderRadius="50px"
                    border="1px solid #969696"
                    boxSizing="border-box"
                  >
                    <Text
                      color="#969696"
                      fontSize="16px"
                      fontWeight="400"
                      fontStyle="normal"
                      fontFamily="Pretendard"
                    >
                      임시저장
                    </Text>
                  </Box>
                  <Text
                    position="relative"
                    w="400px"
                    h="36px"
                    ml="16px"
                    top="41px"
                    fontSize="24px"
                    fontWeight="600"
                    fontStyle="normal"
                    fontFamily="Pretendard"
                  >
                    프로젝트 관리를 위한 JIRA 활용기
                  </Text>
                </Box>
                <Image
                  w="190px"
                  h="190px"
                  borderRadius="20px"
                  src="https://bit.ly/dan-abramov"
                  alt="image01"
                />
              </Box>

              <Text
                position="absolute"
                fontSize="18px"
                lineHeight="150%"
                fontWeight="400"
                fontFamily="Pretendard"
                fontStyle="normal"
                w="850px"
                h="27px"
                mt="87px"
                color="#999999"
              >
                신규 프로젝트를 효과적으로 관리하기 위한 애자일 도구인 JIRA의
                사용 경험에 대해 소개합니다.
              </Text>
              <Box position="absolute" mt="157px" display="flex">
                <Button
                  gap="10px"
                  h="32px"
                  backgroundColor="#E7EDFC"
                  borderRadius="4px"
                  color="#3c66dd"
                  mr="8px"
                >
                  JIRA
                </Button>
                <Button
                  gap="10px"
                  h="32px"
                  backgroundColor="#E7EDFC"
                  borderRadius="4px"
                  color="#3c66dd"
                  mr="8px"
                >
                  스프린트
                </Button>
                <Button
                  gap="10px"
                  h="32px"
                  backgroundColor="#E7EDFC"
                  borderRadius="4px"
                  color="#3c66dd"
                  mr="8px"
                >
                  애자일
                </Button>
              </Box>
              <Box
                position="absolute"
                display="flex"
                mt="229px"
                w="850px"
                h="21px"
              >
                <Text w="703px" color="#999999" gap="10px" h="21px">
                  Jay | 2022.11.05
                </Text>
                <Box display="flex" alignItems="center" mr="16px">
                  <Image
                    mr="4px"
                    h="15px"
                    alt="eyeIcon"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="#999999" fontSize="14px" fontWeight="400">
                    356
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" mr="16px">
                  <Image
                    mr="4px"
                    h="15px"
                    alt="eyeIcon"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="#999999" fontSize="14px" fontWeight="400">
                    51
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" mr="16px">
                  <Image
                    mr="4px"
                    h="15px"
                    alt="eyeIcon"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text color="#999999" fontSize="14px" fontWeight="400">
                    51
                  </Text>
                </Box>
              </Box>
            </Box>
          </TabPanel>

          <TabPanel>두</TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  )
}

export default MyProfile
