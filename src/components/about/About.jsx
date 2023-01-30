import React from "react";
import css from "./About.module.css";
import LogoFooter from "../../assets/LogoFooter.png";

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h3 className={css.text1}> Sobre Nós</h3>
      </div>
      <div className={css.linha}>
        <hr align="center" />
      </div>
      {/* lado esquerdo */}
      <div className={css.wrapper}>
        <div className={css.circle}></div>
        <img src={LogoFooter} alt="" width={600} />
      </div>
      <div className={css.wrappertext}>
        <span className={css.text1}>
          Lorem ipsum dolor sit amet. Ut beatae fugiat qui velit ipsa ut
          delectus veritatis ea earum molestiae aut iusto labore et laboriosam
          commodi. Sed error rerum et minima quod non beatae quia. In recusandae
          galisum ea itaque optio ab sunt Quis ut odio doloribus est debitis
          laboriosam.
        </span>
      </div>
    </div>
  );
};

export default About;
