import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageCircle,
} from "react-icons/fi";

import SectionTitle from "../SectionTitle/SectionTitle";
import { contactLinks as links } from "../../data/contact";

import "./Contact.css";

const contactOptions = [
  {
    id: "github",
    title: "GitHub",
    description:
      "Explora el código, los procesos y los proyectos detrás de Asteria.",
    href: links.github,
    label: "Explorar repositorios",
    icon: FiGithub,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description:
      "Conoce mi trayectoria profesional y acompaña mi transición hacia tecnología.",
    href: links.linkedin,
    label: "Ver perfil profesional",
    icon: FiLinkedin,
  },
  {
    id: "email",
    title: "Correo",
    description:
      "Conversemos sobre oportunidades, colaboración o una nueva idea.",
    href: links.email,
    label: "Enviar un mensaje",
    icon: FiMail,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 0.61, 0.36, 1],
    },
  }),
};

function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div
        className="contact__aurora contact__aurora--blue"
        aria-hidden="true"
      />

      <div
        className="contact__aurora contact__aurora--purple"
        aria-hidden="true"
      />

      <div className="container contact__container">
        <SectionTitle
          eyebrow="Conectemos"
          title="¿Construimos algo juntos?"
          description="Cada gran proyecto comienza con una conversación. Estoy abierta a oportunidades donde pueda seguir aprendiendo, aportar una mirada empática y transformar ideas en soluciones digitales."
        />

        <div className="contact__grid">
          {contactOptions.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.id}
                className={`contact-card contact-card--${item.id}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.title}: ${item.label}`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                whileHover={{
                  y: -9,

                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                <div className="contact-card__top">
                  <span className="contact-card__icon">
                    <Icon aria-hidden="true" />
                  </span>

                  <span className="contact-card__arrow">
                    <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>

                <div className="contact-card__content">
                  <span className="contact-card__number">
                    0{index + 1}
                  </span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </div>

                <span className="contact-card__link">{item.label}</span>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          className="contact__invitation"
          initial={{
            opacity: 0,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 0.61, 0.36, 1],
          }}
        >
          <div className="contact__invitation-icon">
            <FiMessageCircle aria-hidden="true" />
          </div>

          <div>
            <span className="contact__invitation-label">
              Disponible para nuevas oportunidades
            </span>

            <p>
              Busco colaborar en equipos donde la tecnología, el aprendizaje
              continuo y las personas sean parte central de la solución.
            </p>
          </div>

          <a
            className="contact__email-button"
            href={links.email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enviar correo a ${links.emailAddress}`}
          >
            <FiMail aria-hidden="true" />

            <span>Escríbeme</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;