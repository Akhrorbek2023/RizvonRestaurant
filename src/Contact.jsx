import React from "react";
import { NavLink } from "react-router-dom";
import "./contact.scss";
import {
  Logo,
  Telegram,
  Instagram,
  YouTube,
  Facebook,
  Phone,
  Web,
  Location,
  Mail,
} from "./Images";

export const Contact = () => {
  return (
    <div className="container contact">
      <h1>Bog'lanish</h1>

      <div className="contact__holder">
        <div className="contact__left">
          <div className="contact__box">
            <img src={Location} alt="" />
            <p>Toshkent shahri, Mirzo Ulug‘bek tumani, Shahriobod tumani</p>
          </div>
          <div className="contact__box">
            <img src={Phone} alt="" />
            <p>+998 94 332 00 16</p>
          </div>
          <div className="contact__box">
            <img src={Mail} alt="" />
            <p>rizvon@gmail.com</p>
          </div>
          <div className="internets">
            <img src={Telegram} alt="" />
            <img src={Instagram} alt="" />
            <img src={YouTube} alt="" />
            <img src={Facebook} alt="" />
          </div>
        </div>
        <div className="contact__right">
          <iframe
            width="674"
            height="523"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            src="https://maps.google.com/maps?width=674&amp;height=523&amp;hl=en&amp;q=%20Tashkent+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <NavLink to="https://maps-generator.com/">Maps Generator</NavLink>
        </div>
      </div>
    </div>
  );
};
