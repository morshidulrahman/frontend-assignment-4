/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

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
import { useGetSingleProductQuery } from "@/redux/features/product/productApi";
import { Swiper as SwiperType } from "swiper";
import { Loader2 } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const {
    data: productResponse,
    isLoading,
    isError,
  } = useGetSingleProductQuery(id as string);

  const product = productResponse?.data ?? null;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="animate-spin w-10 h-10 text-green-600" />
      </div>
    );
  }

  if (isError || !product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-5 pt-20">
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
        className="mySwiper2 md:h-[400px] !h-96 xl:max-h-[400px] rounded-lg overflow-hidden "
      >
        <SwiperSlide>
          <img src={product.image} className="!w-full !h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner2.png"
            className="!w-full !h-full  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner3.png"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner4.png"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner5.png"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://carento-nextjs.vercel.app/assets/imgs/cars-details/banner6.png"
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        spaceBetween={15}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper rounded-lg max-h-64  "
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
          <p className="  mb-5">{product.description}</p>
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
