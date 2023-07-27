import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { BiUser } from 'react-icons/bi'
import { MdCompareArrows } from 'react-icons/md'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsFillPauseFill } from 'react-icons/bs'
import { useRef,useEffect } from 'react'
export default function Headersummer() {
    const vidRef = useRef();

    useEffect(() => { vidRef.current.play(); }, []);
    return (
        <>
            <div className=' relative h-96 flex items-center justify-center ' style={{ height: "100vh" }}>
                <video className='pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden object-cover  '
                    src="https://cdn.shopify.com/videos/c/vp/76d0a9910e8b4b0eb3c04a234a3f9566/76d0a9910e8b4b0eb3c04a234a3f9566.HD-1080p-7.2Mbps-11375089.mp4"
                    ref={vidRef}
                    muted
                    autoPlay
                    loop
                />
                <div className='flex justify-between items-center absolute gap-10 top-10 container px-20 '>
                    <div className='flex items-center gap-20'>
                        <img className='w-[110px]' src='https://demo.shopifyhydrogen.io/sanity/461aa05da169ce9b8d7598d5e0e9ade7aef795c1-1765x515.svg?width=1765&height=515&crop=center'></img>
                        <div className='flex items-center gap-8 text-white text-[18px]'>
                            <p>Home</p>
                            <p>Women</p>
                            <p>Men</p>
                            <p>Accessories</p>
                            <p>Pages</p>
                            <p>FAQs</p>
                            <p>About Us</p>
                            <p>Blog</p>
                            <p>Contact</p>
                        </div>
                    </div>

                    <div className='flex gap-4 text-white'>
                        <AiOutlineSearch className='text-[28px]'></AiOutlineSearch>
                        <div className='flex flex-col items-center '>
                            <BiUser className='text-[28px] '></BiUser>
                        </div>
                        <div className='flex flex-col items-center '>
                            <MdCompareArrows className='text-[28px]'></MdCompareArrows>

                        </div>
                        <div className='flex flex-col items-center '>
                            <AiOutlineHeart className='text-[28px]'></AiOutlineHeart>

                        </div>
                        <div className='flex flex-col items-center relative '>
                            <FiShoppingCart className='text-[28px]'></FiShoppingCart>

                            <div className='bg-[#EF4444] absolute w-4 h-4 flex items-center justify-center right-[-5px] rounded-full text-[12px]'>0</div>
                        </div>
                    </div>
                </div>
                <div className='container flex items-center justify-between absolute px-20 text-white '>
                    <div>
                        <p>NIKE JOYRIDE</p>
                        <h3 className='text-[48px] font-bold'>NOTHING <br /> CAN STOP YOU</h3>
                        <button className='w-[140px] h-12 border rounded-3xl text-[18px]'>Shop now</button>
                    </div>
                    <button className='border-[7px] rounded-full w-16 h-16 flex items-center justify-center text-[36px]'>
                        <BsFillPauseFill></BsFillPauseFill>
                    </button>
                </div>
            </div>

        </>
    )
}
