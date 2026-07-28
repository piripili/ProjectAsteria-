import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaJava,
  FaReact,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiGit } from "react-icons/si";

import Button from "../Button/Button";

const technologies = [
  {
    name: "Java",
    icon: <FaJava />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "SQL",
    icon: <SiMysql />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

function HeroContent() {
  return (
    <motion.div
      className="hero-content"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="hero-content__availability" variants={itemVariants}>
        <span className="hero-content__availability-dot" />
        Disponible para nuevas oportunidades
      </motion.div>

      <motion.p className="hero-content__eyebrow" variants={itemVariants}>
        Hello World.
      </motion.p>

      <motion.h1 className="hero-content__title" variants={itemVariants}>
        Construyo soluciones donde la{" "}
        <span className="hero-content__gradient">tecnología</span> y la{" "}
        <span className="hero-content__gradient">empatía</span> se encuentran.
      </motion.h1>

      <motion.div className="hero-content__identity" variants={itemVariants}>
        <span className="hero-content__line" />

        <h2>María Adriana Contreras Soto</h2>

        <p>Java Full Stack Developer</p>
      </motion.div>

      <motion.p className="hero-content__description" variants={itemVariants}>
        Creo aplicaciones funcionales, accesibles y centradas en el usuario,
        combinando desarrollo frontend y backend para convertir ideas en
        soluciones digitales.
      </motion.p>

      <motion.div className="hero-content__actions" variants={itemVariants}>
        <Button
          href="#proyectos"
          variant="primary"
          icon={<FaArrowRight />}
        >
          Ver proyectos
        </Button>

        <Button
          href="/cv-maria-adriana-contreras.pdf"
          variant="secondary"
          icon={<FaDownload />}
          download
        >
          Descargar CV
        </Button>
      </motion.div>

      <motion.div
        className="hero-content__technologies"
        variants={itemVariants}
      >
        <span className="hero-content__technologies-label">
          Tecnologías con las que construyo:
        </span>

        <div className="hero-content__technology-list">
          {technologies.map((technology) => (
            <span
              className="hero-content__technology"
              key={technology.name}
            >
              {technology.icon}
              {technology.name}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div className="hero-content__socials" variants={itemVariants}>
        <span>Conecta conmigo:</span>

        <a
          href="https://github.com/TU-USUARIO"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/TU-PERFIL"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
          LinkedIn
        </a>
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;