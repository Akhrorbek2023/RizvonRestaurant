import React from 'react'
import "../carusel.scss"
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import Background from "../assets/images/rizvonbg.png"
import Video from "../assets/video.mp4"
export const CaruselAbout = () => {
    const slides = Array.from({ length: 10 }).map(
        (el, index) => `Slide ${index + 1}`
      );
   
  return (




    <Swiper modules={[Virtual]} spaceBetween={30} slidesPerView={3} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <video width="300" height='400' autoPlay muted>
             <source src={Video} />
        </video>
        </SwiperSlide>
      ))}
    </Swiper>
  

    
  )
}
