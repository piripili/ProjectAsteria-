import "./Glass.css";

function Glass({
  children,
  className = "",
  variant = "soft",
  as: Component = "div",
}) {
  const validVariants = ["soft", "medium", "strong"];
  const selectedVariant = validVariants.includes(variant) ? variant : "soft";

  return (
    <Component
      className={`glass glass--${selectedVariant} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}

export default Glass;