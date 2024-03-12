import LogoGitHub from "../../../../assets/git-icon.png";
import styles from "./style.module.css"

export const ProjectsCard = ({ project }) => {
  return (
    <div className={`${styles.projectFlex} container-border`}>
      <li>
        <h3 className="title sm">{project.name}</h3>
        <p>{project.description}</p>
        <a href="#" className="link-saiba-mais">Saiba mais</a>
      </li>
      <img src={LogoGitHub} alt="Logo Git" />
    </div>
  );
};
