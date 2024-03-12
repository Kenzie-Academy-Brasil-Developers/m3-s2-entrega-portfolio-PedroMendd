import styles from "./style.module.css";

export const TechCard = ({ technologies }) => {
  return (
    <li className={`${styles.techContainer} container-border`}>
      <img src={technologies.img} alt={technologies.name} />
      <h2 className="title sm">{technologies.name}</h2>
    </li>
  );
};
