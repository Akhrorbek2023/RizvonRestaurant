import React from 'react'
import "../container/about.scss"
import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import ProfilePic from "../assets/images/profile.svg";


export const Costumers = () => {
    const slides = Array.from({ length: 10 }).map(
        (el, index) => `Slide ${index + 1}`
      );
   
  return (




    <Swiper modules={[Virtual]} spaceBetween={50} slidesPerView={3} virtual>
      {slides.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          <div className="costumers">
        
        <div className="costumers__box">
          <div className="profile__header">
            <div>
              <img src={ProfilePic} alt="" width="80" />
            </div>
            <div>
              <h3>Suyunuv Elbek</h3>
              <span>Baxtli mijoz</span>
            </div>
          </div>
          <div>
            <p>
              Iloxim xamma iwlarizda rivoj szi muxliszman Rizvon . Szni 1chi
              Sardoraka bn vidyoyizdan kn 5 maxal namoz oqiwni organdm va oqiy
              bowladm . Olloxmni nazaridasz . Suygan bandasisz . inwaallox .
              Bowlagan iwlaringiz xayrli va barokatli bolsin
            </p>
          </div>
        </div>
      </div>
        </SwiperSlide>
      ))}
    </Swiper>
  

    
  )
}
