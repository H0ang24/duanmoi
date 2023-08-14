import Layout from "../components/Layout";
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
export default function Home({ sanPhamsTraVe }) {
  return (
    <Layout>
      <div className="px-10 mt-10 container mx-auto w-full">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src="https://demo.shopifyhydrogen.io/sanity/21d0b937a7814588201a92a0e7f0ec5cbf62ba92-1920x800.webp?width=1920&height=800&crop=center"></img>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://demo.shopifyhydrogen.io/sanity/697afa725e00d00e2b17bd6882f0ce61a35c93d7-1920x874.webp?width=1920&height=874&crop=center"></img>
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className="px-10 m-10 container mx-auto w-full">
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
