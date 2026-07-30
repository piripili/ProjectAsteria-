import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import ProjectVisual from "./ProjectVisual";

function ProjectCase({ project, index }) {
  return (
    <motion.article
      className="project-case"
      style={{
        "--project-accent": project.accent,
        "--project-glow": project.glow
      }}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.8, delay: index * 0.04 }}
    >
      <div className="project-case__topline">
        <span>PROJECT {project.number}</span>
        <span>{project.year}</span>
      </div>

      <div className="project-case__hero">
        <div className="project-case__intro">
          <span className="project-case__eyebrow">{project.eyebrow}</span>
          <h3>{project.title}</h3>

          <div className="project-case__status">
            <span className="project-case__status-dot" />
            {project.status}
          </div>

          <p className="project-case__summary">{project.summary}</p>
          <blockquote>{project.quote}</blockquote>
        </div>

        <ProjectVisual type={project.visual} title={project.title} />
      </div>

      <div className="project-case__story">
        <section>
          <span className="project-case__label">El reto</span>
          <p>{project.problem}</p>
        </section>

        <section>
          <span className="project-case__label">La solución</span>
          <p>{project.solution}</p>
        </section>
      </div>

      <div className="project-case__details">
        <section>
          <span className="project-case__label">Mi participación</span>
          <ul className="project-case__contribution">
            {project.contribution.map((item) => (
              <li key={item}>
                <FiCheckCircle aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <span className="project-case__label">Tecnologías</span>
          <div className="project-case__technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>
      </div>

      {project.links.length > 0 && (
        <div className="project-case__links">
          {project.links.map((link) => (
            <a
              key={`${project.id}-${link.label}`}
              className={`project-case__link project-case__link--${link.type}`}
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </motion.article>
  );
}

export default ProjectCase;
