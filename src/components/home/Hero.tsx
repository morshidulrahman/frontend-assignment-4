// Import Swiper styles
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <div className=" ">
      <Swiper
        pagination={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="w-full h-[400px] lg:h-[90vh]   banner_image3 ">
            <div className="z-50 lg:p-60 md:p-10 p-12  flex flex-col items-center justify-center">
              <h2 className="capitalize text-3xl  lg:text-6xl font-bold text-white lg:w-[80%] mx-auto text-center w-[90%] md:w-[90%]">
                Looking for a vehicle? You’re in the perfect spot.
              </h2>
              <p className=" text-white py-5 md:py-6  w-[90%] mx-auto text-center lg:w-[80%] md:w-[70%]">
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
              <button className="bg-[#ff5a3c] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#ff5a3c] duration-300 transition-all border border-[#ff5a3c] capitalize mt-2">
                View All
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] lg:h-[100vh] banner_image2">
            <div className="z-50 lg:p-60 md:p-10 p-12  flex flex-col items-center justify-center">
              <h2 className="capitalize text-3xl  lg:text-6xl font-bold text-white lg:w-[80%] mx-auto text-center w-[90%] md:w-[80%]">
                Looking for a vehicle? You’re in the perfect spot.
              </h2>
              <p className=" text-white py-5 md:py-6  w-[90%] mx-auto text-center lg:w-[60%] md:w-[70%]">
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
              <button className="bg-[#ff5a3c] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#ff5a3c] duration-300 transition-all border border-[#ff5a3c] capitalize mt-2">
                View All
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[400px] lg:h-[100vh]   banner_image ">
            <div className="z-50 lg:p-60 md:p-10 p-12  flex flex-col items-center justify-center">
              <h2 className="capitalize text-3xl  lg:text-6xl font-bold text-white lg:w-[80%] mx-auto text-center w-[90%] md:w-[70%]">
                Looking for a vehicle? You’re in the perfect spot.
              </h2>
              <p className=" text-white py-5 md:py-6  w-[90%] mx-auto text-center lg:w-[80%] md:w-[70%]">
                Over 39,000 people work for us in more than 70 countries all
                over the This breadth of global coverage, combined with
                specialist services
              </p>
              <button className="bg-[#ff5a3c] text-white px-4 py-2 rounded-md hover:bg-transparent hover:text-[#ff5a3c] duration-300 transition-all border border-[#ff5a3c] capitalize mt-2">
                View All
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
