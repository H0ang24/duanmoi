import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { SlEarphonesAlt } from 'react-icons/sl'
import { AiOutlineFileProtect } from 'react-icons/ai'
export default function Footer() {
  return (
    <>
      <footer >
        <div className='bg-[#1C1917] w-full h-32 border-b border-[#333333] flex justify-between px-10 '>
          <div className='text-white flex items-center gap-7'>

            <FiShoppingCart className='text-[32px]'></FiShoppingCart>
            <div>
              <p>FAST AND FREE DELIVERY</p>
              <p>Free delicery for all orders over $140</p>
            </div>
          </div>
          <div className='text-white flex items-center gap-7'>
            <SlEarphonesAlt className='text-[32px]'></SlEarphonesAlt>
            <div>
              <p>24/7 CUSTOMER SUPPORT</p>
              <p>Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className='text-white flex items-center gap-7'>
            <AiOutlineFileProtect className='text-[32px]'></AiOutlineFileProtect>
            <div>
              <p>MONEY BACK GUARANTEE</p>
              <p>We return money within 30 days</p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </footer>
    </>
  )
}
