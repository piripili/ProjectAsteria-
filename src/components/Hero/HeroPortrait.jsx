import { motion } from "framer-motion";

import adrianaPhoto from "../../assets/adriana-sin-lentes.png";
import HeroBadges from "./HeroBadges";
import Constellation from "../Constellation/Constellation";

function HeroPortrait() {
  return (
    <motion.div
      className="hero-portrait"
      initial={{ opacity: 0, scale: 0.9, x: 40 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{
        duration: 1,
        delay: 0.35,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      <div className="hero-portrait__ambient-glow" />

      <div className="hero-portrait__orbit hero-portrait__orbit--outer" />
      <div className="hero-portrait__orbit hero-portrait__orbit--inner" />

      <motion.div
        className="hero-portrait__frame"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={adrianaPhoto}
          alt="María Adriana Contreras Soto, Java Full Stack Developer"
          className="hero-portrait__image"
        />

        <div className="hero-portrait__overlay" />
        <div className="hero-portrait__shine" />
      </motion.div>

      <HeroBadges />
      <Constellation />
    </motion.div>
  );
}

export default HeroPortrait;