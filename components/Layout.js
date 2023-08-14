import React from 'react'
import Header from './Header'
import Footer from './Footer'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <main>{children}</main>     
      <Footer></Footer>
    </>
  )
}
