import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"

type Props = {
  title?: string
  children: React.ReactNode
}

/**
 * 이곳에 레이아웃을 구현해주세요.
 */
const Layout: React.FC<Props> = ({ title, children }) => {
  const getTitle = () => {
    if (!title) return `Coquality`
    return `${title} | Coquality`
  }
  return (
    <div>
      <Head>
        <title>{getTitle()}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
