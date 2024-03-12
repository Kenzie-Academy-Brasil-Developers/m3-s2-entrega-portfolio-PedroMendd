import { projects } from "../../../data/projects";
import { ProjectsCard } from "./ProjectsCard";
import styles from "./style.module.css"

export const ProjectsList = () => {
  return (
    <ul className={styles.projectsBox}>
      {projects.map((project) => (
        <ProjectsCard key={project.id} project={project} />
      ))}
    </ul>
  );
};
