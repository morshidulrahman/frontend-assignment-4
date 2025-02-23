import React, { useRef, useState } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Swiper, SwiperSlide } from "swiper/react";

import "./swiper.css";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Link, useParams } from "react-router-dom";
import ProductFaQ from "./ProductFaq";
import Reviews from "./ProductReview";

import CarDetails from "./ProductHeader";
import { useGetAllProductsQuery } from "@/redux/features/product/productApi";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const {
    data: productsResponse,
    isLoading,
    isError,
  } = useGetAllProductsQuery("");
  const products = productsResponse?.data || [];
  const product = products.find((p) => p._id === id);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError || !product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="pb-5">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className=" text-md">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/allProducts" className=" text-md">
                  Cars
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="font-semibold text-md">
                {product.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Swiper
        spaceBetween={10}
        hashNavigation={{
          watchState: true,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 md:h-[400px] h-auto xl:max-h-[400px] rounded-lg overflow-hidden"
      >
        <SwiperSlide className=" md:h-[400px] h-auto xl:max-h-[400px]">
          <img src={product.image} className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner6.png" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={15}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-lg max-h-40"
      >
        <SwiperSlide>
          <img
            src="https://carento-nextjs.vercel.app/assets/imgs/page/car/banner-thumn.png"
            className="rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/page/car/banner-thumn2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/page/car/banner-thumn3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/page/car/banner-thumn4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/page/car/banner-thumn5.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/page/car/banner-thumn6.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/page/car/banner-thumn4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://carento-nextjs.vercel.app/assets/imgs/page/car/banner-thumn.png" />
        </SwiperSlide>
      </Swiper>

      <CarDetails product={product} />
      <div className="py-10">
        <div className="p-5 border rounded-lg">
          <h3 className="text-3xl text-green-500 mb-3">Overview</h3>
          <p className="  mb-5">
            Elevate your Las Vegas experience to new heights with a journey
            aboard The High Roller at The LINQ. As the tallest observation wheel
            in the world, standing at an impressive 550 feet tall, The High
            Roller offers a bird's-eye perspective of the iconic Las Vegas Strip
            and its surrounding desert landscape. From the moment you step into
            one of the spacious cabins, you'll be transported on a mesmerizing
            adventure, where every turn offers a new and breathtaking vista of
            the vibrant city below.
          </p>
          <p className=" ">
            Whether you're a first-time visitor or a seasoned Las Vegas
            aficionado, The High Roller promises an unparalleled experience that
            will leave you in awe. With its climate-controlled cabins and
            immersive audio commentary, this attraction provides a unique
            opportunity to see Las Vegas from a whole new perspective, while
            learning about its rich history and famous landmarks along the way.
          </p>
        </div>
      </div>
      <ProductFaQ />
      <Reviews product={product} />
    </div>
  );
}
