import React from "react";
import css from "./Header.module.css";
import Logo from "../../assets/Icone2.png";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
      </div>

      <div className={css.right}>
        <div className={css.menu}>
          <ul className={css.menu}>
            <li>Sobre Nós</li>
            <li>Podcast</li>
            <li>Instagram</li>
            <li>Feedbacks</li>
            <li>Produtos</li>
          </ul>
        </div>
      </div>
      {/* <FaSpotify className={css.spot} /> */}
    </div>
  );
};

export default Header;
