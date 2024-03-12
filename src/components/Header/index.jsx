import Logo from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
  return (
    <header>
      <div className={`${styles.headerContainer} container`}>
        <img src={Logo} alt="Logo Porfólio" />
        <nav>
          <div className={styles.nadMenu}>
            <a href="#About-Section" className="link-header">
              Sobre
            </a>
            <a href="#Tech-Section" className="link-header">
              Stack
            </a>
            <a href="#Projects-Section" className="link-header">
              Projetos
            </a>
          </div>
        </nav>
        <button className="btn">Contato</button>
      </div>
    </header>
  );
};
