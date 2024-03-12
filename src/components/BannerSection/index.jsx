import BannerAbout from "../../assets/banner-img.png";
import { username } from "../../data/user";
import styles from "./style.module.css";

export const BannerSection = () => {
  return (
    <section>
      <div className={`${styles.BannerContainer} container`}>
        <div className={styles.UserContainer}>
          <label>{username}</label>
          <h1 className="title">Bem vindo ao meu portfólio</h1>
          <p>Uma frase interessante sobre mim</p>
          <button className="btn">Saiba mais</button>
        </div>
        <img src={BannerAbout} alt="Banner Programação" />
      </div>
    </section>
  );
};
