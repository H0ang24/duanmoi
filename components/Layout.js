import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headersummer from './Headersummer'

export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>     
      <Footer></Footer>
    </>

  )
}
