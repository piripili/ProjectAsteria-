import "./AuroraBackground.css";

function AuroraBackground() {
  return (
    <div className="aurora-background" aria-hidden="true">
      <div className="aurora-background__base" />

      <div className="aurora-background__light aurora-background__light--blue" />
      <div className="aurora-background__light aurora-background__light--purple" />
      <div className="aurora-background__light aurora-background__light--gold" />

      <div className="aurora-background__wave aurora-background__wave--one" />
      <div className="aurora-background__wave aurora-background__wave--two" />

      <div className="aurora-background__stars">
        {Array.from({ length: 30 }, (_, index) => (
          <span
            key={index}
            className="aurora-background__star"
            style={{
              "--star-left": `${(index * 37) % 100}%`,
              "--star-top": `${(index * 53) % 95}%`,
              "--star-delay": `${(index % 7) * 0.5}s`,
              "--star-size": `${2 + (index % 3)}px`,
            }}
          />
        ))}
      </div>

      <div className="aurora-background__noise" />
      <div className="aurora-background__vignette" />
    </div>
  );
}

export default AuroraBackground;