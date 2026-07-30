import AuroraBackground from "../Background/AuroraBackground";
import HeroContent from "./HeroContent";
import HeroPortrait from "./HeroPortrait";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <AuroraBackground />

      <div className="hero__container">
        <HeroContent />
        <HeroPortrait />
      </div>

      <a
        href="#trayectoria"
        className="hero__scroll"
        aria-label="Ir a la sección de trayectoria"
      >
        <span className="hero__scroll-mouse" aria-hidden="true">
          <span />
        </span>

        <span>Descubre mi historia</span>
        <span className="hero__scroll-arrow" aria-hidden="true">
          ↓
        </span>
      </a>
    </section>
  );
}

export default Hero;