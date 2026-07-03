import "./ColorCard.css";

export default function ColorCard({
  name,
  token,
  hex,
  description
}) {

  function copy(value) {
    navigator.clipboard.writeText(value);
    alert(`${value} copiado.`);
  }

  return (
    <div className="ii-color-card">

      <div
        className="ii-color-preview"
        style={{ background: `var(${token})` }}
      />

      <h3>{name}</h3>

      <p>{description}</p>

      <div className="ii-color-info">

        <button onClick={() => copy(token)}>
          {token}
        </button>

        <button onClick={() => copy(hex)}>
          {hex}
        </button>

      </div>

    </div>
  );
}