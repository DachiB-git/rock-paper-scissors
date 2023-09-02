function Button({ item, icon, color, winner = null }) {
  return (
    <div
      className={`circle-outer ${color}-outer ${
        winner && winner === item ? "winner-button" : ""
      }`}
      data-item={item}
    >
      <div className={`circle-inner ${color}-inner`}>
        <img src={icon} alt="Button" className="button-icon" />
      </div>
    </div>
  );
}

export default Button;
