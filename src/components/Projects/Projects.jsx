import { projects } from "../../data/projects";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCase from "./ProjectCase";
import "./Projects.css";

function Projects() {
  return (
    <section className="section projects" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Lo que construyo"
          title="Proyectos que representan distintas etapas de mi crecimiento."
          description="Cada proyecto reúne aprendizaje técnico, colaboración y una forma diferente de convertir ideas o datos en soluciones."
          centered
        />

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
