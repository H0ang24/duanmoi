import React from "react";
import Link from "next/link";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
export default function ShopBest() {
  return (
    <div className="container  grid grid-cols-2 gap-6">
      <div>
        <div className="mb-5 ">
          <div className="flex relative overflow-hidden anh">
            <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/products/BB2WYWR2_685_P1.jpg?v=1667882195&width=600&height=600&crop=center"></img>
            <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/products/BB2WYWR2_685_P2.jpg?v=1667878864&width=600&height=600&crop=center"></img>
          </div>

          {/* <div className=" text-white bg-red-600 w-9 text-center  aspect-[2/1] absolute top-0">
                  sale
                </div> */}
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <div className="flex justify-between items-center">
            <p className="font-light text-black">New Balance</p>
            <div className="flex items-center gap-2 text-black">
              <BsArrowLeftRight className="text-[20px]"></BsArrowLeftRight>
              <AiOutlineHeart className="text-[20px]"></AiOutlineHeart>
            </div>
          </div>
          <div className="flex text-amber-500 items-center gap-1">
            <div className="flex">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
            <p className="text-black">(7)</p>
          </div>
          <div className="font-semibold min-h-[48px] text-black">
            Mens New Balance Two WXY Basketball Shoes
          </div>
          <div className="flex gap-3">
            <del className="text-gray-500 font-bold">$130</del>

            <p className="text-red-500 font-bold">$100</p>
          </div>
        </div>
        <button className=" mt-4 text-black rounded font-medium text-center py-3 px-6 border text-primary w-full ">
          Add to Bag
        </button>
      </div>
      <div>
        <div className="mb-5 ">
          <div className="flex relative overflow-hidden anh">
            <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/products/BB2WYWR2_685_P1.jpg?v=1667882195&width=600&height=600&crop=center"></img>
            <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/products/BB2WYWR2_685_P2.jpg?v=1667878864&width=600&height=600&crop=center"></img>
          </div>

          {/* <div className=" text-white bg-red-600 w-9 text-center  aspect-[2/1] absolute top-0">
                  sale
                </div> */}
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <div className="flex justify-between items-center">
            <p className="font-light text-black">New Balance</p>
            <div className="flex items-center gap-2 text-black">
              <BsArrowLeftRight className="text-[20px]"></BsArrowLeftRight>
              <AiOutlineHeart className="text-[20px]"></AiOutlineHeart>
            </div>
          </div>
          <div className="flex text-amber-500 items-center gap-1">
            <div className="flex">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
            <p className="text-black">(7)</p>
          </div>
          <div className="font-semibold min-h-[48px] text-black">
            Mens New Balance Two WXY Basketball Shoes
          </div>
          <div className="flex gap-3">
            <del className="text-gray-500 font-bold">$130</del>

            <p className="text-red-500 font-bold">$100</p>
          </div>
        </div>
        <button className=" mt-4 text-black rounded font-medium text-center py-3 px-6 border text-primary w-full ">
          Add to Bag
        </button>
      </div>
      <div>
        <div className="mb-5 ">
          <div className="flex relative overflow-hidden anh">
            <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/products/BB2WYWR2_685_P1.jpg?v=1667882195&width=600&height=600&crop=center"></img>
            <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/products/BB2WYWR2_685_P2.jpg?v=1667878864&width=600&height=600&crop=center"></img>
          </div>

          {/* <div className=" text-white bg-red-600 w-9 text-center  aspect-[2/1] absolute top-0">
                  sale
                </div> */}
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <div className="flex justify-between items-center">
            <p className="font-light text-black">New Balance</p>
            <div className="flex items-center gap-2 text-black">
              <BsArrowLeftRight className="text-[20px]"></BsArrowLeftRight>
              <AiOutlineHeart className="text-[20px]"></AiOutlineHeart>
            </div>
          </div>
          <div className="flex text-amber-500 items-center gap-1">
            <div className="flex">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
            <p className="text-black">(7)</p>
          </div>
          <div className="font-semibold min-h-[48px] text-black">
            Mens New Balance Two WXY Basketball Shoes
          </div>
          <div className="flex gap-3">
            <del className="text-gray-500 font-bold">$130</del>

            <p className="text-red-500 font-bold">$100</p>
          </div>
        </div>
        <button className=" mt-4 text-black rounded font-medium text-center py-3 px-6 border text-primary w-full ">
          Add to Bag
        </button>
      </div>
      <div>
        <div className="mb-5 ">
          <div className="flex relative overflow-hidden anh">
            <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/products/BB2WYWR2_685_P1.jpg?v=1667882195&width=600&height=600&crop=center"></img>
            <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/products/BB2WYWR2_685_P2.jpg?v=1667878864&width=600&height=600&crop=center"></img>
          </div>

          {/* <div className=" text-white bg-red-600 w-9 text-center  aspect-[2/1] absolute top-0">
                  sale
                </div> */}
        </div>
        <div className="flex flex-col gap-1 mt-5">
          <div className="flex justify-between items-center">
            <p className="font-light text-black">New Balance</p>
            <div className="flex items-center gap-2 text-black">
              <BsArrowLeftRight className="text-[20px]"></BsArrowLeftRight>
              <AiOutlineHeart className="text-[20px]"></AiOutlineHeart>
            </div>
          </div>
          <div className="flex text-amber-500 items-center gap-1">
            <div className="flex">
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
              <AiFillStar></AiFillStar>
            </div>
            <p className="text-black">(7)</p>
          </div>
          <div className="font-semibold min-h-[48px] text-black">
            Mens New Balance Two WXY Basketball Shoes
          </div>
          <div className="flex gap-3">
            <del className="text-gray-500 font-bold">$130</del>

            <p className="text-red-500 font-bold">$100</p>
          </div>
        </div>
        <button className=" mt-4 text-black rounded font-medium text-center py-3 px-6 border text-primary w-full ">
          Add to Bag
        </button>
      </div>
    </div>
  );
}
