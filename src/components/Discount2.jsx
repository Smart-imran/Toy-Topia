import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import offer1 from "../assets/slide1.jpg";
import offer2 from "../assets/slide2.jpg";
import offer3 from "../assets/slide3.jpg";
import Container from "./Container/Container";

const Discount2 = () => {
  const slides = [
    { id: 1, bg: offer1,  },
    { id: 2, bg: offer2,  },
    { id: 3, bg: offer3,  },
  ];

  return (
    <Container>
    <div className="w-11/12 mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        className="h-[500px] md:h-[500px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <h2 className="text-white text-3xl font-bold bg-black bg-opacity-40 p-3 rounded">
                {slide.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </Container>
  );
};

export default Discount2;
