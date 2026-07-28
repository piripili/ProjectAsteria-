import { motion } from "framer-motion";
import {
  FiActivity,
  FiCode,
  FiCompass,
  FiHeart,
} from "react-icons/fi";

import { timelineItems } from "../../data/timeline";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./About.css";

const icons = [FiHeart, FiCompass, FiCode, FiActivity];

function About() {
  return (
    <section className="section about" id="trayectoria">
      <div className="container">
        <SectionTitle
          eyebrow="Mi trayectoria"
          title="Cambié de herramienta, no de propósito."
          description="Mi experiencia profesional comenzó ayudando a las personas desde el área de la salud. Hoy utilizo la tecnología para analizar problemas, crear soluciones y construir experiencias con impacto."
        />

        <div className="about__timeline">
          {timelineItems.map((item, index) => {
            const Icon = icons[index] || FiActivity;

            return (
              <motion.article
                className="about__item"
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
              >
                <div className="about__icon">
                  <Icon />
                </div>

                <span className="about__year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          className="about__statement"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span>Mi enfoque</span>

          <blockquote>
            “Las mejores soluciones comienzan entendiendo a las personas.”
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}

export default About;