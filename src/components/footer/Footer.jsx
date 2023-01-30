import React from "react";
import css from "./Footer.module.css";
import { FaSpotify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import LogoFooter from "../../assets/LogoFooter.png";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.logo}>
        <img src={LogoFooter} alt="" />
      </div>
      <ul className={css.social}>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaSpotify />
        </li>
      </ul>

      <div className={css.cFooter}></div>
    </div>
  );
};

export default Footer;
