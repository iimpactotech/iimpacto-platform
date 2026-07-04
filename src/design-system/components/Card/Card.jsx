import "./Card.css";

export default function Card({
  title,
  value,
  subtitle,
  icon,
  variant = "primary",
}) {
  return (
    <div className={`ii-card ii-card--${variant}`}>
      <div className="ii-card__header">
        <div className="ii-card__icon">
          {icon}
        </div>

        <span className="ii-card__title">
          {title}
        </span>
      </div>

      <h2 className="ii-card__value">
        {value}
      </h2>

      <p className="ii-card__subtitle">
        {subtitle}
      </p>
    </div>
  );
}