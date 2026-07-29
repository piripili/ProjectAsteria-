import {
  FiArrowUp,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import "./Footer.css";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/piripili",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mar%C3%ADa-adriana-contreras-soto/",
    icon: FiLinkedin,
  },
  {
    label: "Correo",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=maadri.contreras@gmail.com&su=Contacto%20desde%20Project%20Asteria",
    icon: FiMail,
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer__stars" aria-hidden="true">
        <span className="footer__star footer__star--one">✦</span>
        <span className="footer__star footer__star--two">·</span>
        <span className="footer__star footer__star--three">✧</span>
        <span className="footer__star footer__star--four">·</span>
        <span className="footer__star footer__star--five">✦</span>
      </div>

      <div className="container footer__container">
        <div className="footer__main">
          <div className="footer__identity">
            <span className="footer__symbol" aria-hidden="true">
              ✦
            </span>

            <div>
              <p className="footer__project">Project Asteria</p>

              <p className="footer__author">
                María Adriana Contreras
              </p>
            </div>
          </div>

          <div className="footer__message">
            <span>La constelación continúa</span>

            <p>
              Cada experiencia suma una nueva estrella a la historia.
            </p>
          </div>

          <nav
            className="footer__social"
            aria-label="Redes profesionales"
          >
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  title={item.label}
                >
                  <Icon aria-hidden="true" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} María Adriana Contreras. Diseñado y desarrollado
            con React.
          </p>

          <button
            type="button"
            className="footer__top-button"
            onClick={scrollToTop}
            aria-label="Volver al inicio"
          >
            <span>Volver al inicio</span>
            <FiArrowUp aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;