import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="#inicio" className="navbar__brand">
          <span className="navbar__logo">A</span>

          <span className="navbar__brand-text">
            <strong>Asteria</strong>
            <small>crafted by Mary</small>
          </span>
        </a>

        <nav className="navbar__navigation" aria-label="Navegación principal">
          <a href="#inicio">Inicio</a>
          <a href="#trayectoria">Mi historia</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Lo que construyo</a>
          <a href="#contacto">Conectemos</a>
        </nav>

        <div className="navbar__socials">
          <a
            href="https://github.com/TU-USUARIO"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/TU-PERFIL"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;