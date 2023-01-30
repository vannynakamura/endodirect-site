import React from "react";
import css from "./Hero.module.css";
import Fone from "../../assets/fone.png";
import { FaSpotify } from "react-icons/fa";
import Wave from "react-wavify";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.imagem}>
          <img src={Fone} alt="" />
          <div className={css.texts}>
            <div className={css.text3}>
              Lorem ipsum dolor sit amet. Ut beatae fugiat qui velit ipsa ut
              delectus veritatis ea earum molestiae aut iusto labore et
              laboriosam commodi. Sed error rerum et minima quod non beatae
              quia. In recusandae galisum ea itaque optio ab sunt Quis ut odio
              doloribus est debitis laboriosam.
            </div>
            <div className={css.text4}>Aproveite e conheça nosso podcast:</div>
            <div>
              <FaSpotify className={css.spot} />
            </div>
            {/* Colocar a animação da pessoa falando */}
            <div>
              <div className={css.box}></div>
              <Wave
                mask="url(#mask)"
                fill="#e6d070"
                options={{
                  height: 30,
                  amplitude: 40,
                  speed: 0.3,
                  points: 300,
                }}
              >
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0" stopColor="white" />
                    <stop offset="0.5" stopColor="black" />
                  </linearGradient>
                  <mask id="mask">
                    <rect
                      x="60"
                      y="-10"
                      width="500"
                      height="100"
                      fill="url(#gradient)"
                    />
                  </mask>
                </defs>
              </Wave>
            </div>
          </div>
          <div className={css.h_side}>
            <div className={css.text2}>
              <div className={css.span1}>Conheça o </div>
              <div className={css.span2}>ENDODIRECT</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
