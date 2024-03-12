import LogoWhats from "../../assets/whatsapp-icon.png";
import LogoLinkedin from "../../assets/linkedin-icon.png";
import LogoGit from "../../assets/github-icon.png";
import { user } from "../../data/user";
import styles from "./style.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={`${styles.footerSection} container footer`}>
        <div className={styles.contactBox}>
          <h1 className="title md">Contato</h1>
          <div className={styles.flexImg}>
            <img src={LogoWhats} alt="Logo Whatsapp" />
            <img src={LogoLinkedin} alt="Logo Linkedin" />
            <img src={LogoGit} alt="Logo GitHub" />
          </div>
        </div>
        <p>Todos os direitos reservados - {user}</p>
      </div>
    </footer>
  );
};
