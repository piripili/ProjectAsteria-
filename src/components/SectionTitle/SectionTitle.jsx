import { motion } from "framer-motion";
import "./SectionTitle.css";

function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <motion.header
      className={`section-title ${
        centered ? "section-title--centered" : ""
      }`}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65 }}
    >
      <span className="section-title__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </motion.header>
  );
}

export default SectionTitle;