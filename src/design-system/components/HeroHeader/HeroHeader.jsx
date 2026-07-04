import "./HeroHeader.css";

export default function HeroHeader({
  greeting,
  title,
  description,
  action,
}) {
  return (
    <section className="ii-hero">
      <div className="ii-hero__content">
        <span className="ii-hero__greeting">{greeting}</span>

        <h1>{title}</h1>

        <p>{description}</p>
      </div>

      <div className="ii-hero__action">
        {action}
      </div>
    </section>
  );
}