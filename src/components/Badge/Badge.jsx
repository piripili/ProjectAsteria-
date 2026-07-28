import "./Badge.css";

function Badge({
  icon,
  children,
  className = "",
  variant = "default",
}) {
  return (
    <div className={`badge badge--${variant} ${className}`.trim()}>
      {icon && <span className="badge__icon">{icon}</span>}
      <span className="badge__label">{children}</span>
    </div>
  );
}

export default Badge;