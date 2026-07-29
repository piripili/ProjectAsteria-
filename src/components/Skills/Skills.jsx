import { motion } from "framer-motion";

import { skillGroups } from "../../data/skills";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./skills.css";

function Skills() {
  return (
    <section className="section skills" id="tecnologias">
      <div className="container">
        <SectionTitle
          eyebrow="Tecnologías"
          title="Herramientas que convierto en soluciones."
          description="Mi formación actual combina desarrollo frontend, backend, bases de datos, diseño y colaboración ágil."
          centered
        />

        <div className="skills__grid">
          {skillGroups.map((group, groupIndex) => (
            <motion.article
              className="skills__group"
              key={group.category}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.65,
                delay: groupIndex * 0.1,
              }}
            >
              <h3>{group.category}</h3>

              <div className="skills__list">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{
                      y: -4,
                      scale: 1.04,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;