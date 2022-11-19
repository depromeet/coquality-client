import React from 'react'
import Footer from './Footer'
import Header from './Header'

type Props = {
  children: React.ReactNode
}

/**
 * 이곳에 레이아웃을 구현해주세요.
 */
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
