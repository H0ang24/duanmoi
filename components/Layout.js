import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Headersummer from './Headersummer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Product from './Product'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


export default function Layout({ children }) {
  return (
    <>
      <Header></Header>
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 1000 }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide><img src='https://demo.shopifyhydrogen.io/sanity/21d0b937a7814588201a92a0e7f0ec5cbf62ba92-1920x800.webp?width=1920&height=800&crop=center'></img></SwiperSlide>
          <SwiperSlide><img src='https://demo.shopifyhydrogen.io/sanity/697afa725e00d00e2b17bd6882f0ce61a35c93d7-1920x874.webp?width=1920&height=874&crop=center'></img></SwiperSlide>

          ...
        </Swiper>
      <main>{children}</main>     
      <Footer></Footer>
    </>

  )
}
