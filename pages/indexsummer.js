import React from "react";
import Headersummer from "../components/Headersummer";
import Footer from "../components/Footer";
import Product from "../components/Product";
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
export default function indexsummer({ sanPhamsTraVe }) {
  return (
    <>
      <Headersummer></Headersummer>
      <div className=" md:grid-cols-3 lg:grid-cols-3 grid gap-4 md:gap-6 items-center p-10 container  mx-auto w-full">
        <div className="relative">
          <div>
            <img src="https://demo.shopifyhydrogen.io/sanity/d88ea04a8eb606d0a215a409aad56cecf650b4d7-450x450.webp?width=450&height=450&crop=center"></img>
          </div>
          <div
            className="right-16 text-right top-1/2 -translate-y-1/2
                      z-10 
                      absolute "
          >
            <p className="whitespace-pre-wrap text-2xl lg:text-4xl font-bold text-white ">
              MOUNTAIN BIKE <br></br> EXTREME DRIVING
            </p>
            <button className="inline-block font-semibold border-b text-white  border-white pb-1 mt-5">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="relative">
          <div>
            <img src="https://demo.shopifyhydrogen.io/sanity/bd232f0107eb27f3d922de3d010f0d675350e1d7-450x450.webp?width=450&height=450&crop=center"></img>
          </div>
          <div
            className="right-16 text-right mx-auto top-1/2 -translate-y-1/2
                      z-10 
                      absolute "
          >
            <div className="text-white p-6 lg:p-12 w-full text-center">
              <p className="whitespace-pre-wrap text-2xl lg:text-4xl font-bold text-white ">
                BIKES FOR<br></br> PROFESSIONAL
              </p>
              <button className="inline-block font-semibold border-b text-white  border-white pb-1 mt-5">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <div className="relative">
          <div>
            <img src="https://demo.shopifyhydrogen.io/sanity/119fecc1f33cefd6743a5157d869b590bc4bbdaa-450x450.webp?width=450&height=450&crop=center"></img>
          </div>
          <div
            className="left-16 text-left top-1/2 -translate-y-1/2
                      z-10 
                      absolute "
          >
            <div className="text-white w-full">
              <p className="whitespace-pre-wrap text-2xl lg:text-4xl font-bold">
                LONG RIDE<br></br>ON A ROAD BIKE
              </p>
              <div>
                <button className="inline-block font-semibold border-b text-white border-white pb-1 mt-5">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10 container mx-auto w-full">
        <div className="flex justify-between">
          <div className=" text-[24px] font-bold my-5 ">NEW ARRIVALS</div>
          <div className="py-1 flex gap-x-8 justify-center ">
            <button>
              <div className="border-b-2 border-black pb-1">Men</div>
            </button>
            <button>
              <div className="border-b-2 border-black pb-1">Women</div>
            </button>
            <button>
              {" "}
              <div className="border-b-2 border-black pb-1">Accessories</div>
            </button>
          </div>
        </div>
        <div className="container mx-auto w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={30}
            slidesPerView={4}
            navigation
            autoplay={{ delay: 1000 }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <div className=" p-10 container  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {sanPhamsTraVe.map((product, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Product product={product}></Product>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className="text-center mt-3 md:mt-12">
          <button className="inline-block font-medium px-10 py-3 border border-black text-black rounded-full">
            View More
          </button>
        </div>
      </div>
      <div className="container p-10  mx-auto w-full">
        <img src="https://demo.shopifyhydrogen.io/sanity/bfab0e86c94a9e183c25ca3e6d5d93a0bb9b0129-1920x720.webp?width=600&height=225&crop=center"></img>
      </div>
      <div className="p-10 container mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className=" text-[24px] font-bold my-5 ">SELECTED FOR YOU</div>
          <div className="underline">View All</div>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 1000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className=" p-10 container  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {sanPhamsTraVe.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <Product product={product}></Product>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
      <div className="p-10 container mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className=" text-[24px] font-bold my-5 ">LATEST NEWS</div>
          <div className="underline">View All</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          <div>
            <div>
              <img
                className="card-image bg-gray-300 aspect-[3/2]"
                src="https://cdn.shopify.com/s/files/1/0673/5645/9319/articles/blog-img1_2.webp?v=1679026456&width=600&height=358&crop=center"
              ></img>
            </div>
            <div className="flex gap-2 mt-4 text-sm font-normal text-gray-600">
              <p>Demo Owen v1 Admin</p>
              <p>|</p>
              <p>Tue Nov 08 2022</p>
            </div>
            <div className="md:text-lg font-medium ">
              <p>The Best Nike Black Friday Deals of 2023</p>
            </div>
            <div className="mt-2 text-gray-600">
              <p>
                Black Friday 2023 is coming, and that only means one thing — its
                time to fill your ...
              </p>
            </div>
          </div>
          <div>
            <div className="card-image bg-gray-300 aspect-[3/2]">
              <img src="https://cdn.shopify.com/s/files/1/0673/5645/9319/articles/tennis-shoes-womens_2.webp?v=1679026442&width=600&height=400&crop=center"></img>
            </div>
            <div className="flex gap-2 mt-4 text-sm font-normal text-gray-600">
              <p>Quy Phuc </p>
              <p>|</p>
              <p>Tue Nov 08 2022</p>
            </div>
            <div className="md:text-lg font-medium ">
              <p>THE 14 BEST TENNIS SHOES FOR WOMEN</p>
            </div>
            <div className="mt-2 text-gray-600">
              <p>
                If you purchase an independently reviewed product or service
                through a link on our website...
              </p>
            </div>
          </div>
          <div>
            <div>
              <img
                className="card-image bg-gray-300 aspect-[3/2]"
                src="https://cdn.shopify.com/s/files/1/0673/5645/9319/articles/outfits-for-kids_2.webp?v=1679026427&width=600&height=491&crop=center"
              ></img>
            </div>
            <div className="flex gap-2 mt-4 text-sm font-normal text-gray-600">
              <p>Demo Owen v1 Admin</p>
              <p>|</p>
              <p>Tue Nov 08 2022</p>
            </div>
            <div className="md:text-lg font-medium ">
              <p>BEST BACK-TO-SCHOOL OUTFITS FOR KIDS & TEENS 2023</p>
            </div>
            <div className="mt-2 text-gray-600">
              <p>
                August means its time to start thinking about back-to-school
                shopping. To help you ...
              </p>
            </div>
          </div>
          <div>
            <img
              className="card-image bg-gray-300 aspect-[3/2]"
              src="https://cdn.shopify.com/s/files/1/0673/5645/9319/articles/blog-img-3_2.webp?v=1679026401&width=600&height=344&crop=center"
            ></img>
            <div className="flex gap-2 mt-4 text-sm font-normal text-gray-600">
              <p>Quy Phuc</p>
              <p>|</p>
              <p>Tue Nov 08 2022</p>
            </div>
            <div className="md:text-lg font-medium ">
              <p>INTERVIEW WITH ELLI LAUFER ABOUT THE BERLIN MARATHON</p>
            </div>
            <div className="mt-2 text-gray-600">
              <p>
                Our German SportsShoes ambassador Elli is running the Berlin
                Marathon this year. We met up...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-16 flex gap-8 justify-between container mx-auto w-full">
        <div>
          <img src="https://demo.shopifyhydrogen.io/sanity/34c020b8b81440c8c7924b519a6dc53e3f138ed1-137x22.webp"></img>
        </div>
        <div>
          <img src="https://demo.shopifyhydrogen.io/sanity/fe586cef3beb79ab8cc9844b8ae8ca0a66908e15-72x21.webp"></img>
        </div>
        <div>
          <img src="https://demo.shopifyhydrogen.io/sanity/bf64048cf14c4ab946b22f9edfefa44ff51fad10-132x22.webp"></img>
        </div>
        <div>
          <img src="https://demo.shopifyhydrogen.io/sanity/c8d5e242b68f4ae209d0253ba141bab64eb6c3b3-94x21.webp"></img>
        </div>
        <div>
          <img src="https://demo.shopifyhydrogen.io/sanity/039be5aef04ff58ff39fdd1620afdd90f56e34a8-87x20.webp"></img>
        </div>
        <div>
          <img src="https://demo.shopifyhydrogen.io/sanity/20e83319fe61556b2c37114de5f12e4b096c9fc7-120x20.webp"></img>
        </div>
      </div>
      <Footer></Footer>
    </>
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
