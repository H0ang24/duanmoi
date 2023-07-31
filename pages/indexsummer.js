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
      <div className="m-10">
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
