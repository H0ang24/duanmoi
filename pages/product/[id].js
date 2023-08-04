import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Product from "../../components/Product";
import { AiOutlineHeart, AiOutlineShareAlt, AiFillStar } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
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
//JSX
export default function id({ sanPhamTraVe, sanPhamsTraVe }) {
  console.log(sanPhamTraVe);
  console.log(sanPhamsTraVe);
  return sanPhamTraVe.product ? (
    <>
      <Header></Header>

      <div className="flex container p-5 ">
        <div>
          <div className="grid grid-cols-2 px-10  w-full gap-[2px] ">
            (sanPhamTraVe.map)
            <img
              className=" border rounded"
              src={sanPhamTraVe.product.images[0].src}
            ></img>
           
          </div>
        </div>
        <div className=" h-[480px] w-[40%] ">
          <div
            className="  mx-10 flex flex-col gap-5  "
            style={{ position: "sticky", height: "5px", top: 0 }}
          >
            <p className="text-gray-500">Reebok</p>
            <h1 className="font-bold text-heading whitespace-normal text-[30px]">
              {sanPhamTraVe.product.title}
            </h1>
            <div className="flex items-center">
              <div className="flex">
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
                <AiFillStar></AiFillStar>
              </div>
              <p>(0 reviews)</p>
            </div>
            <div className="flex gap-3">
              <p className=" font-bold">
                {sanPhamTraVe.product.variants[0].price}$
              </p>
              <del className="text-gray-500 font-bold">
                {sanPhamTraVe.product.variants[0].compare_at_price}$
              </del>
            </div>
            <button className="inline-block rounded font-medium text-center py-3 px-6 bg-primary text-contrast w-full bg-black text-white">
              Add to Bag
            </button>
            <button className="inline-block rounded font-medium text-center py-2 px-6 bg-primary text-contrast w-full bg-[#5A31F4] text-white">
              Shop
            </button>
            <div className="flex gap-5">
              <div className="flex items-center gap-1">
                <AiOutlineHeart className="text-[25px]"></AiOutlineHeart>
                <p className="text-[15px]">WISHLIST</p>
              </div>
              <div className="flex items-center gap-1">
                <BsArrowLeftRight className="text-[25px]"></BsArrowLeftRight>
                <p className="text-[15px]">COMPARE</p>
              </div>
              <div className="flex items-center gap-1">
                <AiOutlineShareAlt className="text-[25px]"></AiOutlineShareAlt>
                <p className="text-[15px]">SHARE</p>
              </div>
            </div>
            <div>
              <div className="flex gap-2">
                <p className="text-gray-500">SKU:</p>
                <p>N/A</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500">CATEGORIES:</p>
                <p>Men, Shoes</p>
              </div>
              <div className="flex gap-2">
                <p className="text-gray-500"> TAGS:</p>
                <p>N/A</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-10"></div>
      <div className="px-36">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <p className="font-bold">PRODUCTS DETAILS</p>
            <div
              className="list-disc"
              dangerouslySetInnerHTML={{
                __html: sanPhamTraVe.product.body_html,
              }}
            ></div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      {/* <div className="m-10">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          autoplay={{ delay: 1000 }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <div className=' p-10 container  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {sanPhamsTraVe.map((product, index) => {
              return (
                <SwiperSlide key={index}>
                  <Product product={product}></Product>
                </SwiperSlide>
              )
            })}
          </div>
        </Swiper>
      </div> */}

      <Footer></Footer>
    </>
  ) : (
    <div>404</div>
  );
}

//ReactJS => Client => SEO! =>

//NextJS
export const getServerSideProps = async (context) => {
  const { id } = context.query;

  ///API
  const response = await fetch(
    `https://panofrontendstore.myshopify.com/admin/api/2023-07/products/${id}.json`,
    {
      headers: {
        "X-Shopify-Access-Token": "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",
      },
    }
  );


  const responseJson = await response.json();
  return {
    props: { sanPhamTraVe: responseJson},
  };
};

// export const getStaticProps = async () => {
//   const response = await fetch(
//     "https://panofrontendstore.myshopify.com/admin/api/2023-07/products.json",
//     {
//       headers: {
//         "X-Shopify-Access-Token": "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",
//       },
//     }
//   );
//   const responseJson = await response.json();
//   console.log(responseJson.products)
//   return { props: { sanPhamsTraVe: responseJson.products } };
// };
