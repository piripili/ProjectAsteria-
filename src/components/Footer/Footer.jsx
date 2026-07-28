import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div>
          <span className="footer__brand">Project Asteria</span>
          <p>
            Diseñado y desarrollado por María Adriana Contreras
            Soto.
          </p>
        </div>

        <code>
          System.out.println("Gracias por visitar mi portafolio.");
        </code>

        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}

export default Footer;