import { constellations } from "../../data/constellations.js";
import Constellation from "../Constellation/Constellation";
import SectionTitle from "../SectionTitle/SectionTitle";

import "./skills.css";

function Skills() {
  return (
    <section className="section skills" id="tecnologias">
      <div className="container">
        <SectionTitle
          eyebrow="Mi universo tecnológico"
          title="Cada herramienta forma parte de una constelación."
          description="Explora las tecnologías que acompañan mi transición al desarrollo de software y descubre cómo las he utilizado en mis proyectos."
          centered
        />

        <div className="skills__constellations">
          {constellations.map((system, index) => (
            <Constellation
              key={system.id}
              system={system}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;