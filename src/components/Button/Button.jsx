import "./Button.css";

function Button({
  children,
  href,
  icon,
  variant = "primary",
  className = "",
  download = false,
  target,
  rel,
}) {
  if (href) {
    return (
      <a
        href={href}
        className={`button button--${variant} ${className}`.trim()}
        download={download}
        target={target}
        rel={rel}
      >
        <span>{children}</span>

        {icon && <span className="button__icon">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`button button--${variant} ${className}`.trim()}
    >
      <span>{children}</span>

      {icon && <span className="button__icon">{icon}</span>}
    </button>
  );
}

export default Button;