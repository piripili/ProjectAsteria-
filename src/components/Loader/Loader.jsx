import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import "./Loader.css";

function Loader({ onEnter, isLeaving }) {
  return (
    <motion.div
      className="loader"
      initial={{ opacity: 1 }}
      animate={{ opacity: isLeaving ? 0 : 1 }}
      transition={{ duration: 0.9 }}
    >
      <div className="loader__aurora" />

      <motion.div
        className="loader__content"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="loader__star"
          animate={{
            scale: [1, 1.12, 1],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>

        <p className="loader__eyebrow">Project Asteria</p>

        <h1>Preparando la constelación</h1>

        <p className="loader__message">
          Tecnología, empatía y nuevas posibilidades.
        </p>

        <button
          type="button"
          className="loader__enter"
          onClick={onEnter}
          disabled={isLeaving}
        >
          <span>
            {isLeaving ? "Encendiendo Asteria..." : "Entrar a Asteria"}
          </span>

          <FiArrowRight />
        </button>

        <p className="loader__sound-note">
          Esta experiencia incluye sonido opcional.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Loader;