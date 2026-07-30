function ProjectVisual({ type, title }) {
  return (
    <div className={`project-visual project-visual--${type}`} aria-hidden="true">
      <div className="project-visual__stars">
        <span /><span /><span /><span /><span />
      </div>

      {type === "asteria" && (
        <div className="project-visual__screen">
          <span className="project-visual__screen-label">ASTERIA</span>
          <span className="project-visual__screen-line" />
          <span className="project-visual__screen-copy">Crafted by Mary</span>
        </div>
      )}

      {type === "huellitas" && (
        <div className="project-visual__shop">
          <span className="project-visual__symbol">✦</span>
          <strong>Marcando Huellitas</strong>
          <small>ecommerce · comunidad · refugios</small>
        </div>
      )}

      {type === "hooploop" && (
        <div className="project-visual__ball">
          <span /><span /><span />
        </div>
      )}

      {type === "spotify" && (
        <div className="project-visual__bars">
          <span /><span /><span /><span /><span /><span /><span />
        </div>
      )}

      {type === "data" && (
        <div className="project-visual__chart">
          {[34, 58, 46, 78, 65, 88].map((height) => (
            <span key={height} style={{ "--height": `${height}%` }} />
          ))}
        </div>
      )}

      <span className="project-visual__title">{title}</span>
    </div>
  );
}

export default ProjectVisual;
