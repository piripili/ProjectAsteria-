import { motion } from "framer-motion";
import "./Constellation.css";

const milestones = [
  {
    id: "generation",
    year: "2026",
    title: "Generation México",
    description: "Cohorte Java Full Stack",
    x: 380,
    y: 70,
  },
  {
    id: "huellitas",
    year: "2026",
    title: "Marcando Huellitas",
    description: "E-commerce solidario",
    x: 440,
    y: 220,
  },
  {
    id: "asteria",
    year: "2026",
    title: "Project Asteria",
    description: "Diseño y desarrollo",
    x: 350,
    y: 390,
  },
  {
    id: "next",
    year: "Próximamente",
    title: "Nueva estrella",
    description: "El siguiente capítulo",
    x: 195,
    y: 465,
    future: true,
  },
];

function Constellation() {
  return (
    <div className="constellation">
      <svg
        className="constellation__svg"
        viewBox="0 0 520 540"
        role="img"
        aria-label="Constelación con hitos profesionales"
      >
        <motion.path
          d="M380 70 L440 220 L350 390 L195 465"
          className="constellation__line"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 1,
            ease: "easeInOut",
          }}
        />

        {milestones.map((milestone, index) => (
          <motion.g
            key={milestone.id}
            className="constellation__node"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.1 + index * 0.2,
            }}
          >
            <circle
              cx={milestone.x}
              cy={milestone.y}
              r={milestone.future ? 6 : 7}
              className={
                milestone.future
                  ? "constellation__point constellation__point--future"
                  : "constellation__point"
              }
            />

            <circle
              cx={milestone.x}
              cy={milestone.y}
              r="17"
              className="constellation__halo"
            />
          </motion.g>
        ))}
      </svg>

      {milestones.map((milestone) => (
        <motion.article
          key={milestone.id}
          className={`constellation__card constellation__card--${milestone.id}`}
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 1.35 }}
        >
          <span className="constellation__year">{milestone.year}</span>
          <strong>{milestone.title}</strong>
          <span>{milestone.description}</span>
        </motion.article>
      ))}
    </div>
  );
}

export default Constellation;