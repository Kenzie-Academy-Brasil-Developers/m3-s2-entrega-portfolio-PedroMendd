import { ProjectsList } from "./ProjectsList";

export const ProjectSection = () => {
  return (
    <section id="Projects-Section">
      <div className="container">
        <h1 className="title md">Projetos</h1>
        <ProjectsList />
      </div>
    </section>
  );
};
