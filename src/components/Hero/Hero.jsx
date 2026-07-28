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

      <a href="#trayectoria" className="hero__scroll">
        <span className="hero__scroll-mouse">
          <span />
        </span>

        <span>Descubre mi historia</span>
        <span className="hero__scroll-arrow">↓</span>
      </a>
    </section>
  );
}

export default Hero;