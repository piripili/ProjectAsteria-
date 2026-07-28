import { FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { motion } from "framer-motion";

import Badge from "../Badge/Badge";

function HeroBadges() {
  const badges = [
    {
      name: "Java",
      icon: <FaJava />,
      variant: "java",
      className: "hero-badges__item--java",
      duration: 5,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot />,
      variant: "spring",
      className: "hero-badges__item--spring",
      duration: 6,
    },
    {
      name: "React",
      icon: <FaReact />,
      variant: "react",
      className: "hero-badges__item--react",
      duration: 5.5,
    },
  ];

  return (
    <div className="hero-badges">
      {badges.map((badge, index) => (
        <motion.div
          key={badge.name}
          className={`hero-badges__item ${badge.className}`}
          animate={{ y: [0, -9, 0] }}
          transition={{
            duration: badge.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
          }}
        >
          <Badge icon={badge.icon} variant={badge.variant}>
            {badge.name}
          </Badge>
        </motion.div>
      ))}
    </div>
  );
}

export default HeroBadges;