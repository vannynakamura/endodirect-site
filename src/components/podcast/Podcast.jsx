import React from "react";
import css from "./Podcast.module.css";
import LogoFooter from "../../assets/LogoFooter.png";

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h3 className={css.text1}> Podcast </h3>
      </div>
      <div className={css.linha}>
        <hr align="center" />
      </div>
      <div className={css.wrapper}>
        <div className={css.circle}></div>
        <img src={LogoFooter} alt="" width={600} />
      </div>
      <div className={css.wrapper}>
        <div className={css.circle}></div>
        <img src={LogoFooter} alt="" width={600} />
      </div>
      <div className={css.wrapper}>
        <div className={css.circle}></div>
        <img src={LogoFooter} alt="" width={600} />
      </div>
      <div className={css.wrapper}>
        <div className={css.circle}></div>
        <img src={LogoFooter} alt="" width={600} />
      </div>
    </div>
  );
};

export default About;
