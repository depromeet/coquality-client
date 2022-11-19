import React from "react";
import { Box, Image, Input, Button, Text } from "@chakra-ui/react";

type Props = {}

const Edit: React.FC<Props> = ({}) => {
  return (
		<Box>
			<Box position='absolute' w='1920px' h='56px'>
				<Text fontSize='20px'>COQUALITY (상단바)</Text>
			</Box>
			<Box></Box>
			<Text position='absolute' mt='104px' h='48px' fontSize='32px' fontWeight='600'>
				프로필 수정
			</Text>
			<Box position='absolute' display='flex' mt='200px' w='1080px' h='120px'>
				<Image
					w='120px'
					h='120px'
					borderRadius='100%'
					src='https://bit.ly/dan-abramov'
					alt='Porfile Image'
				/>
				<Box display='flex' flexDirection='column' ml='20px'>
					<Button
						mb='12px'
						h='44px'
						backgroundColor='black'
						color='white'
						borderRadius='50px'
						p='10px 30px'
						fontSize='16px'
						fontWeight='600'
					>
						이미지 업로드
					</Button>
					<Button
						h='44px'
						border='1px solid #060606'
						fontSize='16px'
						fontWeight='600'
						borderRadius='50px'
						gap='8px'
						p='12px 30px'
					>
						이미지 제거
					</Button>
				</Box>
			</Box>
			<Box position='absolute' w='1080px' h='73px' gap='16px' mt='400px'>
				<Text fontSize='14px' fontWeight='600' color='black' letterSpacing='-0.01em'>
					이메일
				</Text>
				<Input
					mt='16px'
					p='0px 0px 12px'
					gap='10px'
					w='1080px'
					h='36px'
					border='0px'
					borderBottom='1px solid #DDDDDD'
					placeholder='abcdefgh@gmail.com'
					color='#999999'
					fontSize='16px'
					fontWeight='400'
				></Input>
				<Text mt='32px' fontSize='14px' fontWeight='600' color='black' letterSpacing='-0.01em'>
					닉네임
				</Text>
				<Input
					mt='16px'
					p='0px 0px 12px'
					gap='10px'
					w='1080px'
					h='36px'
					border='0px'
					borderBottom='1px solid #DDDDDD'
				></Input>
				<Text fontSize='14px' mt='32px' fontWeight='600' color='black' letterSpacing='-0.01em'>
					소개
				</Text>
				<Input
					mt='16px'
					p='0px 0px 12px'
					gap='10px'
					w='1080px'
					h='36px'
					border='0px'
					borderBottom='1px solid #DDDDDD'
					placeholder='나를 설명하는 한 줄 소개를 작성해 보세요'
					color='#999999'
					fontSize='16px'
					fontWeight='400'
				></Input>
			</Box>
			<Button
				position='absolute'
				mt='793px'
				backgroundColor='#999999'
				color='white'
				borderRadius='50px'
				p='10px 30px'
				h='44px'
				w='255px'
				fontSize='16px'
				fontWeight='600'
			>
				수정완료
			</Button>
		</Box>
	);
}; 

export default Edit
