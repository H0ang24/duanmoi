import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import Link from "next/link";
import Cart from "./Cart";
export default function Header() {
  const [gioHangHienThi, setGioHangHienThi] = useState(false);
  return (
    <div className="w-full">
      <div className="bg-[#FAA618] w-full h-20 flex justify-center items-center gap-8">
        <div>
          <div className="text-[25px] font-bold">20% Off Site-Wide</div>
          <div className="text-[20px] font-normal">Apply code on checkout</div>
        </div>
        <div className="flex gap-[5px] justify-center items-center">
          <div>
            <p className="text-[28px] font-bold">63</p>
            <p className="text-[16  px] font-normal">Days</p>
          </div>
          <div className="font-bold text[20px]">:</div>
          <div>
            <p className="text-[28px] font-bold">8</p>
            <p className="text-[16  px] font-normal">Hrs</p>
          </div>
          <div className="font-bold text[20px]">:</div>
          <div>
            <p className="text-[28px] font-bold">1</p>
            <p className="text-[16  px] font-normal">Mins</p>
          </div>
        </div>
        <button className="bg-[#D20808] w-[250px] h-[55px] text-white rounded text-[20px] fomt-bold">
          CODE: CLIQUEFRIENDLY
        </button>
      </div>
      <div className=" bg-[#1E293B]  w-full  flex justify-center items-center ">
        <div className="  h-24 flex justify-between items-center gap-10 px-12 ">
          <Link href={"/"}>
            <img
              className="w-[160px]"
              src="https://demo.shopifyhydrogen.io/sanity/461aa05da169ce9b8d7598d5e0e9ade7aef795c1-1765x515.svg?width=1765&height=515&crop=center"
            ></img>
          </Link>
          <div className="w-full relative flex items-center gap-8 text-black">
            <div className="flex items-center gap-8 w-[850px]">
              <input
                className="w-full h-10 border border-gray-300 rounded-3xl px-6"
                placeholder="Search in the store..."
              ></input>
              <button className="bg-amber-500 absolute w-8 h-8 z-30 flex items-center justify-center right-2 rounded-full">
                <AiOutlineSearch className="text-[20px]"></AiOutlineSearch>
              </button>
            </div>
          </div>
          <div className="text-white flex items-center gap-4">
            <div className="text-[36px]">
              <AiOutlinePhone></AiOutlinePhone>
            </div>
            <div className="text-[14px]">
              <div>HOTLINE FREE</div>
              <div>+91333444555</div>
            </div>
          </div>
          <div className="flex gap-4 text-white">
            <Link href="/account/login" className="flex flex-col items-center ">
              <BiUser className="text-[34px] "></BiUser>
              <p className="text-[10px]">ACCOUNT</p>
            </Link>
            <div className="flex flex-col items-center ">
              <BsArrowLeftRight className="text-[34px]"></BsArrowLeftRight>
              <p className="text-[10px]">COMPARE</p>
            </div>
            <div className="flex flex-col items-center ">
              <AiOutlineHeart className="text-[34px]"></AiOutlineHeart>
              <p className="text-[10px]">WISHLIST</p>
            </div>
            <div className="flex flex-col items-center relative ">
              <div>
                <button
                  onClick={() => {
                    setGioHangHienThi(!gioHangHienThi);
                  }}
                >
                  <FiShoppingCart className="text-[28px]"></FiShoppingCart>
                </button>
                <Cart
                  trangThai={gioHangHienThi}
                  setGioHangHienThi={setGioHangHienThi}
                ></Cart>
              </div>
              <p className="text-[10px]">CART</p>
              <div className="bg-[#EF4444] absolute w-4 h-4 flex items-center justify-center right-[-5px] rounded-full text-[12px]">
                0
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0F172A]  w-full pl-10 flex items-center  ">
        <div className=" h-12 flex  gap-10 text-white items-center">
          <div>Home</div>
          <div>Wonmen</div>
          <div>Men</div>
          <div>Accessories</div>
          <div>Pages</div>
          <div>FAQs</div>
          <div>About Us</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
      </div>
    </div>
  );
}
