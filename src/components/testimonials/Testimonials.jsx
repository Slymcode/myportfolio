import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar.png";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
  {
    avatar: AVTR1,
    name: "Ofoefule Christian",
    review:
      "Jeremiah is highly creative and a very easy-going person to work with, a very productive and multi-skilled fellow with vast knowledge. He is careful, proactive, self motivated and intelligent team player.",
  },
  {
    avatar: AVTR2,
    name: "Rejoice Edokpayi",
    review:
      "Jeremiah is self motivated, proactive and also an intelligent team player. Highly experienced, creative and ver friendly to work with.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container">
        <Swiper
          className=" testimonials__container"
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
