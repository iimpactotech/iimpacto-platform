import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
}) {
  return (
    <button
      className={`ii-button ii-button--${variant} ii-button--${size}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}