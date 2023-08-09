import React from "react";
import Backgr from "../assets/images/rizvonbg.png";
import "./about.scss";
import Pic01 from "../assets/images/pic01.png";
import Pic02 from "../assets/images/pic02.png";
import Pic03 from "../assets/images/pic03.png";
import Pic04 from "../assets/images/pic04.png";
import Pic05 from "../assets/images/pic05.png";
import Pic06 from "../assets/images/pic06.png";
import Pic07 from "../assets/images/pic07.png";
import Pic08 from "../assets/images/pic08.png";
import Pic09 from "../assets/images/pic09.png";
import Pic10 from "../assets/images/pic10.png";
import Pic11 from "../assets/images/pic11.png";
import Pic12 from "../assets/images/pic12.png";

import { CaruselAbout } from "../components/Carusel";
import { Costumers } from "../components/Costumers";

export const About = () => {
  return (
    <div className="container">
     <div className="carusel">
      <h1>Mijozlar biz haqimizda</h1>
     <CaruselAbout />
     
     </div>
      <div className="background">
        <div className="background__left">
          <h2>Rizvon oilaviy Restarani</h2>
          <p>
            Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga
            taklif qilamiz bizda hammasi Halol va mazzaliy siz bizni shashlikni
            yeganinggizda Boshqacha emoltsiya paydo bo’ladi hammasi bizda.
            Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga
            taklif qilamiz bizda hammasi Halol va mazzaliy siz bizni shashlikni
            yeganinggizda Boshqacha emoltsiya paydo bo’ladi hammasi bizda.
          </p>
        </div>
        <div className="background__right">
          <img src={Backgr} alt="" width="550" height="350" />
        </div>
      </div>
      <div className="gallery">
        <h2>Bizning galereyamiz</h2>
        <div className="gallery__box">
          <img src={Pic01} alt="" />
          <img src={Pic02} alt="" />
          <img src={Pic03} alt="" />
          <img src={Pic04} alt="" />
          <img src={Pic05} alt="" />
          <img src={Pic06} alt="" />
          <img src={Pic07} alt="" />
          <img src={Pic08} alt="" />
          <img src={Pic09} alt="" />
          <img src={Pic10} alt="" />
          <img src={Pic11} alt="" />
          <img src={Pic12} alt="" />
        </div>
      </div>
    <div className="note">
      <h1>Mijozlar biz haqimizda nima deydi?</h1>
    <Costumers/>
    </div>
    </div>
  );
};
