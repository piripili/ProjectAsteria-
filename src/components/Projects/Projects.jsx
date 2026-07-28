import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiStar,
} from "react-icons/fi";

import { projects } from "../../data/projects";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./Projects.css";

function Projects() {
  return (
    <section className="section projects" id="proyectos">
      <div className="container">
        <SectionTitle
          eyebrow="Proyectos"
          title="Cada proyecto representa un problema que decidí resolver."
          description="Estos proyectos muestran mi proceso de aprendizaje, mi capacidad para colaborar y mi interés por desarrollar soluciones con propósito."
        />

        <div className="projects__grid">
          {projects.map((project, index) => (
            <motion.article
              className={`projects__card ${
                project.featured ? "projects__card--featured" : ""
              }`}
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
            >
              <div className="projects__preview">
                <div className="projects__browser">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="projects__visual-content">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{project.title}</strong>
                </div>
              </div>

              <div className="projects__content">
                <div className="projects__header">
                  <div>
                    <span className="projects__category">
                      {project.category}
                    </span>
                    <h3>{project.title}</h3>
                  </div>

                  {project.featured && (
                    <span className="projects__featured">
                      <FiStar />
                      Insignia
                    </span>
                  )}
                </div>

                <p>{project.description}</p>

                <div className="projects__technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="projects__links">
                  <a href={project.demo}>
                    Ver proyecto
                    <FiArrowUpRight />
                  </a>

                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiGithub />
                    Código
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;