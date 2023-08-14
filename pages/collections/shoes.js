import React from "react";
import Layout from "../../components/Layout";
import Product from "../../components/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
export default function ({sanPhamsTraVe}) {
  return (
    <Layout>
      <div className="px-10 pb-36 mt-16">
        <div>
          <h1 className=" font-bold  w-full text-[30px] mb-10">Shoes</h1>
          <div className="mb-10">
            <p className="text-[25px] font-bold mb-5">TOP BRANDS</p>
            <div className="grid grid-cols-5 gap-5">
              <div className="text-center text-[20px]">
                <img src="https://demo.shopifyhydrogen.io/sanity/1c93dd318ddb068d2081160c3a0cc69f192e9af8-500x286.webp?width=500&height=286&crop=center"></img>
                <p>Nike</p>
              </div>
              <div className="text-center text-[20px]">
                <img src="https://demo.shopifyhydrogen.io/sanity/8155be179c7b74da6ff07c4722e192c5a1be7365-500x286.webp?width=500&height=286&crop=center"></img>
                <p>Adidas</p>
              </div>
              <div className="text-center text-[20px]">
                <img src="https://demo.shopifyhydrogen.io/sanity/d439425a7d37f4db47f730926eb74970625ae52e-500x286.webp?width=500&height=286&crop=center"></img>
                <p>New Balance</p>
              </div>
              <div className="text-center text-[20px]">
                <img src="https://demo.shopifyhydrogen.io/sanity/0f1da76b005d3298988d56bf599dffe1f7708726-500x286.webp?width=500&height=286&crop=center"></img>
                <p>Puma</p>
              </div>
              <div className="text-center text-[20px]">
                <img src="https://demo.shopifyhydrogen.io/sanity/271e16e5d377123bf420790781ddf84b2769d4d6-500x286.webp?width=500&height=286&crop=center"></img>
                <p>Reebok</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className=" flex">
              <p className="px-2 font-medium">Sort by:</p>
              <p>Featured</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[20%]">
              <div>
                <p className="whitespace-pre-wrap font-bold text-[20px] pb-4">
                  Filter By
                </p>
              </div>
              <div className="border-b-2 pb-8 mb-6">
                <p className="font-bold mb-3">Availability</p>
                <div className=" flex items-center gap-5">
                  <a className="w-[90px] px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                    In stock
                  </a>
                  <a className=" px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                    Out of stock
                  </a>
                </div>
              </div>
              <div className="border-b-2 pb-8 mb-6">
                <p className="font-bold mb-3">More filters</p>
                <div className=" flex items-center gap-3 mb-4">
                  <a className="w-[80px] px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                    adidas
                  </a>
                  <a className="w-[80[px]] px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                    Asics
                  </a>
                  <a className="w-[80[px]] px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                    nike
                  </a>
                </div>
                <div className=" flex items-center gap-3">
                  <a className="w-[80px] px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                    Nimbus
                  </a>
                  <a className="w-[80[px]] px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                    shoes
                  </a>
                </div>
              </div>
              <div className="border-b-2 pb-8 mb-6">
                <p className="font-bold mb-3">Brand</p>
                <div className="flex flex-col gap-3 ">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <input className="border-black border w-[20px] h-[20px]"></input>
                      <p>Adidas</p>
                    </div>
                    <p>5</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <input className="border-black border w-[20px] h-[20px]"></input>
                      <p>Asics</p>
                    </div>
                    <p>1</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <input className="border-black border w-[20px] h-[20px]"></input>
                      <p>New Balance</p>
                    </div>
                    <p>3</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <input className="border-black border w-[20px] h-[20px]"></input>
                      <p>Nike</p>
                    </div>
                    <p>4</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <input className="border-black border w-[20px] h-[20px]"></input>
                      <p>Puma</p>
                    </div>
                    <p>1</p>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <input className="border-black border w-[20px] h-[20px]"></input>
                      <p>Reebok</p>
                    </div>
                    <p>2</p>
                  </div>
                </div>
              </div>
              <div className="border-b-2 pb-8 mb-6">
                <p className="font-bold mb-3">Color</p>
                <div className="grid grid-cols-5 gap-1">
                  <div className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-black"></div>
                  <div className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-sky-500"></div>
                  <div className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-gray-500"></div>
                  <div className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-sky-200"></div>
                  <div className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-pink-400"></div>
                  <div className="cursor-pointer w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center bg-yellow-400"></div>
                </div>
              </div>
              <div>
                <p className="font-bold mb-3">Size</p>
                <div>
                  <div className=" flex items-center gap-5 mb-4">
                    <a className=" px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                      M10
                    </a>
                    <a className=" px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                      M11
                    </a>
                    <a className=" px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                      M12
                    </a>
                  </div>
                  <div className=" flex items-center gap-5">
                    <a className=" px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                      M13
                    </a>
                    <a className=" px-3 border border-gray-600 flex items-center justify-center py-1 hover:bg-black hover:text-white ">
                      M14
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="m-10 container mx-auto w-full">
             
                  <div className=" p-10 container  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {sanPhamsTraVe.map((product) => {
                      return (
                        <SwiperSlide>
                          <Product product={product}></Product>
                        </SwiperSlide>
                      );
                    })}
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export const getStaticProps = async () => {
  const response = await fetch(
    "https://panofrontendstore.myshopify.com/admin/api/2023-07/products.json",
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );
  const responseJson = await response.json();
  console.log(responseJson.products);
  return { props: { sanPhamsTraVe: responseJson.products } };
};
