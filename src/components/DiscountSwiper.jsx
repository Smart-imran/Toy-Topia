import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";

const DiscountSwiper = () => {
  return (
    <div className="max-w-full mx-auto my-8">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000, 
          disableOnInteraction: false,
        }}
        loop={true}
        className=" shadow-lg"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white text-center py-6 ">
            <h2 className="text-4xl font-bold mb-3">🎉 Welcome Offer!</h2>
            <p className="text-xl">
              Get <span className="font-bold">20% OFF</span> on your first
              login!
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center py-6 ">
            <h2 className="text-4xl font-bold mb-3">💥 Special Deal!</h2>
            <p className="text-xl">
              Enjoy <span className="font-bold">30% Discount</span> just for
              signing up today!
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="bg-gradient-to-r from-green-500 to-emerald-700 text-white text-center py-6">
            <h2 className="text-4xl font-bold mb-3">🌟 Mega Offer!</h2>
            <p className="text-xl">
              Claim your <span className="font-bold">50% OFF</span> on first
              purchase!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiscountSwiper;
