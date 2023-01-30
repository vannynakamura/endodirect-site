import React from "react";
import css from "./Who.module.css";
import FotoEdu from "../../assets/FotoEdu.png";
import FotoRo from "../../assets/FotoRo.png";

const Footer = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h3 className={css.text1}> Quem Somos </h3>
      </div>
      <div className={css.linha}>
        <hr align="center" />
      </div>
      <div className={css.wrapper1}>
        <div className={css.wrapper}>
          <div className={css.circle}></div>
          <img src={FotoEdu} alt="" width={300} />
        </div>
        <div className={css.wrappertext}>
          <h2 className={css.h2}>Dr. Antonio Eduardo Nakamura</h2>
          <span className={css.text1}>
            Lorem ipsum dolor sit amet. Ut beatae fugiat qui velit ipsa ut
            delectus veritatis ea earum molestiae aut iusto labore et laboriosam
            commodi. Sed error rerum et minima quod non beatae quia. In
            recusandae galisum ea itaque optio ab sunt Quis ut odio doloribus
            est debitis laboriosam.
          </span>
        </div>
        <div className={css.wrapper}>
          <div className={css.circle}></div>
          <img src={FotoRo} alt="" width={300} />
        </div>
        <div className={css.wrappertext}>
          <h2 className={css.h2}>Dr. Rodolpho Pinto</h2>
          <span className={css.text1}>
            Lorem ipsum dolor sit amet. Ut beatae fugiat qui velit ipsa ut
            delectus veritatis ea earum molestiae aut iusto labore et laboriosam
            commodi. Sed error rerum et minima quod non beatae quia. In
            recusandae galisum ea itaque optio ab sunt Quis ut odio doloribus
            est debitis laboriosam.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
