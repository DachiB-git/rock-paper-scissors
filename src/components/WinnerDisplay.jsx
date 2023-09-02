import { useEffect, useState } from "react";
import Button from "./Button";

function WinnerDisplay({
  playerChoice,
  houseChoice,
  statusMsg,
  winner,
  setChoices,
}) {
  const [tokens, setTokens] = useState({
    playerToken: false,
    houseToken: false,
  });
  useEffect(() => {
    setTimeout(() => {
      setTokens((prevTokens) => ({ ...prevTokens, houseToken: true }));
    }, 2000);
    setTimeout(() => {
      setTokens((prevTokens) => ({ ...prevTokens, playerToken: true }));
    }, 2500);
  }, []);
  return (
    <div className="winner-display">
      <div className="choice player-choice">
        <h2>you picked</h2>
        <Button {...playerChoice} winner={winner} />
      </div>
      {tokens.playerToken && tokens.houseToken ? (
        <div className="result-wrapper">
          <p>{statusMsg}</p>
          <button
            onClick={() => {
              setChoices({ playerChoice: null, houseChoice: null });
              setTokens({ playerToken: null, houseToken: null });
            }}
            className="new-game-button"
          >
            play again
          </button>
        </div>
      ) : (
        ""
      )}
      <div className="choice house-choice">
        <h2>the house picked</h2>
        <div
          className={`placeholder ${tokens.houseToken ? "hidden" : ""}`}
        ></div>
        <Button {...houseChoice} winner={winner} />
      </div>
    </div>
  );
}

export default WinnerDisplay;
