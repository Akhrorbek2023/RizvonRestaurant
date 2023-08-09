import React from "react";
import "./home.scss";
import {NavLink, Video, Menu, Contact, Costumers, HomePage, HomePage2} from "./HomeImports"
export const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <div className="title__left">
          <NavLink className="food" to={"/menu"}>
            Mazali va Halol taomlar
          </NavLink>
          <h2>
            Jizzax shaxrida eng ma'zzali va shirin taomlar barchasi{" "}
            <span>Rizvon oilaviy</span> Restaranida
          </h2>
          <p>
            Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga
            taklif qilamiz bizda hammasi Halol va mazzaliy siz bizni shashlikni
            yeganinggizda Boshqacha emoltsiya paydo bo’ladi hammasi bizda…
          </p>
          <NavLink className="contact" to={"/contact"}>
            Bog'lanish
          </NavLink>
        </div>
        <div className="title__right">
          <video>
            <source src={Video} />
          </video>
        </div>
      </div>
      <div className="information">
        <div className="info__left">
          <img src={HomePage} alt="" />
          <img className="position" src={HomePage2} alt="" />
        </div>
        <div className="info__right">
          <h2>
            <span>Rizvon oilaviy </span> Restarani
          </h2>
          <p>
            Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga
            taklif qilamiz bizda hammasi Halol va mazzaliy siz bizni shashlikni
            yeganinggizda Boshqacha emoltsiya paydo bo’ladi hammasi bizda…
            Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga
            taklif qilamiz bizda hammasi Halol va mazzaliy siz bizni shashlikni
            yeganinggizda Boshqacha emoltsiya paydo bo’ladi hammasi bizda.
            Rizvon oylaviy restarani sizlarni biz bilan birga Shakshlik yeyishga
            taklif qilamiz
          </p>
          <NavLink className="infoBtn">
            Batafsil ma'lumot.
          </NavLink>
        </div>
      </div>
      <div className="notification">
        <div>
          <img src={Bell} alt="" />
        </div>
      </div>
      <div className="menu__btn">
        <Menu />
        <button>20 ta qo'shish</button>
      </div>
      <div className="menu_cos">
        <Costumers />
      </div>
      <Contact />
    </div>
  );
};
