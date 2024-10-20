"use client";


import React from "react";
import Swiper from "react-id-swiper";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const data = [
  { modernequipped: "img_modern_equipped_computer_lab_250x400.png" },
  { modernequipped: "img_man_working_table.png" },
  { modernequipped: "img_modern_equipped_computer_lab.png" },
  { modernequipped: "img_short_haired_bu.png" },
];

const Slide: React.FC<{ slidesPerView: number }> = ({ slidesPerView }) => {

  const params = {
    slidesPerView: "auto",
    // slidesPerView: slidesPerView,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    // spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {},
    modules: [Autoplay],
  };

  return (
    <Swiper {...params}>
      {data.map((d, index) => (
        <img
          key={"about1" + index}
          src={"/images/" + d.modernequipped}
          alt={d.modernequipped}
          className=" !w-[29%] md:!w-[40%] md:mr-4 sm:mr-2 mr-6 sm:!w-[80%] object-contain "
        />
      ))}
    </Swiper>
  );
};

export default Slide;
