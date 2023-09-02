import logo from "../assets/logo.svg";

function Header({ score }) {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <div className="scoreboard">
        <p className="score-text">score</p>
        <p className="score">{score}</p>
      </div>
    </header>
  );
}

export default Header;
