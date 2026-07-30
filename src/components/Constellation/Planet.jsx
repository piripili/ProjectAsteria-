function Planet({
  planet,
  color,
  glow,
  isActive,
  onActivate,
  onDeactivate,
}) {
  const visibleName = planet.shortName || planet.name;

  const planetStyles = {
    "--planet-size": `${planet.size}px`,
    "--orbit-radius": `${planet.orbit}px`,
    "--planet-angle": `${planet.angle}deg`,
    "--planet-color": color,
    "--planet-glow": glow,
  };

  return (
    <button
      type="button"
      className={`planet ${isActive ? "planet--active" : ""}`}
      style={planetStyles}
      onMouseEnter={() => onActivate(planet)}
      onMouseLeave={onDeactivate}
      onFocus={() => onActivate(planet)}
      onBlur={onDeactivate}
      onClick={() => onActivate(planet)}
      aria-label={`Ver información sobre ${planet.name}`}
    >
      <span className="planet__position">
        <span className="planet__body">
          <span className="planet__shine" />
          <span className="planet__name">{visibleName}</span>
        </span>
      </span>
    </button>
  );
}

export default Planet;