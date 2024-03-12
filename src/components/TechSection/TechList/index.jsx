import { technologies } from "../../../data/technologies";
import { TechCard } from "./TechCard";
import styles from "./style.module.css";

export const TechList = () => {
  return (
    <ul className={styles.flexBox}>
      {technologies.map((technology) => (
        <TechCard key={technology.id} technologies={technology} />
      ))}
    </ul>
  );
};
