import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { MdCompareArrows } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Product from './Product'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
export default function Header() {
  return (
    <div className='w-full'>
      <div className='bg-[#FAA618] w-full h-20 flex justify-center items-center gap-8'>
        <div>
          <div className='text-[25px] font-bold'>20% Off Site-Wide</div>
          <div className='text-[20px] font-normal'>Apply code on checkout</div>
        </div>
        <div className='flex gap-[5px] justify-center items-center'>
          <div>
            <p className='text-[28px] font-bold'>63</p>
            <p className='text-[16  px] font-normal'>Days</p>
          </div>
          <div className='font-bold text[20px]'>:</div>
          <div>
            <p className='text-[28px] font-bold'>8</p>
            <p className='text-[16  px] font-normal'>Hrs</p>
          </div>
          <div className='font-bold text[20px]'>:</div>
          <div>
            <p className='text-[28px] font-bold'>1</p>
            <p className='text-[16  px] font-normal'>Mins</p>
          </div>

        </div>
        <button className='bg-[#D20808] w-[250px] h-[55px] text-white rounded text-[20px] fomt-bold'>
          CODE: CLIQUEFRIENDLY
        </button>
      </div>
      <div className=' bg-[#1E293B]  w-full  flex justify-center items-center '>
        <div className='  h-24 flex justify-between items-center gap-10 '>
          <img className='w-[110px]' src='https://demo.shopifyhydrogen.io/sanity/461aa05da169ce9b8d7598d5e0e9ade7aef795c1-1765x515.svg?width=1765&height=515&crop=center'></img>
          <div className='w-full relative flex items-center gap-8 text-black'>
            <div className='flex items-center gap-8 w-[850px]'>
              <input className='w-full h-10 border border-gray-300 rounded-3xl px-6' placeholder='Search in the store...'></input>
              <button className='bg-amber-500 absolute w-8 h-8 z-30 flex items-center justify-center right-2 rounded-full'>
                <AiOutlineSearch className='text-[20px]'></AiOutlineSearch>
              </button>
            </div>
          </div>
          <div className='text-white flex items-center gap-4'>
            <div className='text-[36px]'>
              <AiOutlinePhone></AiOutlinePhone>
            </div>
            <div className='text-[14px]'>
              <div>HOTLINE FREE</div>
              <div>+91333444555</div>
            </div>
          </div>
          <div className='flex gap-4 text-white'>
            <div className='flex flex-col items-center '>
              <BiUser className='text-[34px] '></BiUser>
              <p className='text-[10px]'>ACCOUNT</p>
            </div>
            <div className='flex flex-col items-center '>
              <MdCompareArrows className='text-[34px]'></MdCompareArrows>
              <p className='text-[10px]'>COMPARE</p>
            </div>
            <div className='flex flex-col items-center '>
              <AiOutlineHeart className='text-[34px]'></AiOutlineHeart>
              <p className='text-[10px]'>WISHLIST</p>
            </div>
            <div className='flex flex-col items-center relative '>
              <FiShoppingCart className='text-[34px]'></FiShoppingCart>
              <p className='text-[10px]'>CART</p>
              <div className='bg-[#EF4444] absolute w-4 h-4 flex items-center justify-center right-[-5px] rounded-full text-[12px]'>0</div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#0F172A]  w-full  flex justify-center items-center '>
        <div className=' h-12 flex justify-between items-center gap-10'></div></div>
      <div className='p-10'>

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
      </div>

     
    </div>

  )
}

