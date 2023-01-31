import React from "react";
import css from "./Podcast.module.css";
import LogoAzul from "../../assets/logoazul.png";
import { AiFillPlayCircle } from "react-icons/ai";

window.onSpotifyIframeApiReady = (IFrameAPI) => {
  let element = document.getElementById("embed-iframe");
  let options = {
    uri: "spotify:episode:7makk4oTQel546B0PZlDM5",
  };
  let callback = (EmbedController) => {};
  IFrameAPI.createController(element, options, callback);
};
const About = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h3 className={css.text1}> Podcast </h3>
      </div>
      <div className={css.linha}>
        <hr align="center" />
      </div>
      <div className={css.wrapperCard}>
        <div className={css.card}>
          <div className={css.cardImage}>
            <img src={LogoAzul} alt="" width={600} />
          </div>
        </div>
        <div className={css.cardContent}>
          <h3>Titulo do Podcast</h3>
        </div>
        <div className={css.descricao}>
          <p>
            Lorem ipsum dolor sit amet. Ut beatae fugiat qui velit ipsa ut
            delectus veritatis ea earum molestiae aut iusto labore et laboriosam
            commodi. Sed error rerum et minima quod non beatae quia. In
            recusandae galisum ea itaque optio ab sunt Quis ut odio doloribus
            est debitis laboriosam.
          </p>
        </div>
        <div className={css.data}>
          <span>dez. de 2022 - 54 min 3 s</span>
        </div>
        <div className={css.play}>
          <AiFillPlayCircle className={css.spot} />
        </div>
      </div>
    </div>
  );
};
export default About;
