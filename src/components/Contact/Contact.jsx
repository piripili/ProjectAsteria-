import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiSend,
} from "react-icons/fi";

import SectionTitle from "../SectionTitle/SectionTitle";
import "./Contact.css";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "El formulario visual funciona. En el siguiente paso lo conectaremos con Formspree."
    );
  };

  return (
    <section className="section contact" id="contacto">
      <div className="container">
        <SectionTitle
          eyebrow="Contacto"
          title="Construyamos algo con propósito."
          description="Estoy abierta a oportunidades junior, proyectos colaborativos y espacios donde pueda continuar aprendiendo y aportando."
          centered
        />

        <div className="contact__layout">
          <motion.div
            className="contact__information"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <span className="contact__label">Hablemos</span>

            <h3>
              Una buena conversación puede ser el inicio de una gran
              solución.
            </h3>

            <p>
              Puedes escribirme para conversar sobre tecnología,
              oportunidades laborales o proyectos con impacto.
            </p>

            <div className="contact__details">
              <a href="mailto:tu-correo@ejemplo.com">
                <FiMail />
                tu-correo@ejemplo.com
              </a>

              <span>
                <FiMapPin />
                Ciudad de México, México
              </span>
            </div>

            <div className="contact__socials">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact__field">
              <label htmlFor="name">Nombre</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="¿Cómo te llamas?"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="email">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                required
              />
            </div>

            <button className="contact__submit" type="submit">
              Enviar mensaje
              <FiSend />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;