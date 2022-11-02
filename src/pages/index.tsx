import styled from '@emotion/styled'
import type { NextPage } from 'next'
import dynamic from 'next/dynamic'

const ArticleEditor = dynamic(() => import('@components/ArticleEditor'), {
  ssr: false,
})

const Home: NextPage = () => {
  return (
    <StyledWrapper>
      <div>에디터 테스트</div>
      <ArticleEditor />
    </StyledWrapper>
  )
}

export default Home

const StyledWrapper = styled.div`
  /* background-color: aliceblue; */
`
