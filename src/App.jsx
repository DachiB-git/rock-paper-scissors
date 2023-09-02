import { useState } from "react";
import iconPaper from "./assets/icon-paper.svg";
import iconRock from "./assets/icon-rock.svg";
import iconScissors from "./assets/icon-scissors.svg";
import WinnerDisplay from "./components/WinnerDisplay";
import ButtonWrapper from "./components/ButtonWrapper";
import Header from "./components/Header";
import Rules from "./components/Rules";
import "./App.css";

function App() {
  const buttons = [
    {
      item: "paper",
      color: "blue",
      icon: iconPaper,
    },
    { item: "scissors", color: "yellow", icon: iconScissors },
    {
      item: "rock",
      color: "red",
      icon: iconRock,
    },
  ];
  const [score, setScore] = useState(0);
  const [choices, setChoices] = useState({
    playerChoice: null,
    houseChoice: null,
    status: null,
  });
  function handleClick(e) {
    if (e.target.className.includes("circle")) {
      const button = e.target;
      const item = button.dataset.item;
      const playerChoice = buttons.find((button) => button.item == item);
      const houseChoice = buttons[Math.floor(Math.random() * buttons.length)];
      let statusMsg = "";
      let winner = null;
      if (playerChoice.item === houseChoice.item) {
        // draw
        statusMsg = "DRAW";
      } else if (
        (playerChoice.item === "paper" && houseChoice.item === "rock") ||
        (playerChoice.item === "scissors" && houseChoice.item === "paper") ||
        (playerChoice.item === "rock" && houseChoice.item === "scissors")
      ) {
        // player wins
        statusMsg = "YOU WIN";
        winner = playerChoice.item;
        setTimeout(() => {
          setScore((prevScore) => prevScore + 1);
        }, 3000);
      } else {
        // house wins
        statusMsg = "YOU LOSE";
        winner = houseChoice.item;
        setTimeout(() => {
          setScore((prevScore) => prevScore - 1);
        }, 3000);
      }
      setChoices({ playerChoice, houseChoice, statusMsg, winner });
    }
  }
  return (
    <div className="App">
      <Header score={score} />
      {(choices.playerChoice === null && (
        <ButtonWrapper buttons={buttons} handleClick={handleClick} />
      )) || <WinnerDisplay {...choices} setChoices={setChoices} />}
      <Rules />
      <button
        className="rules-button"
        onClick={() => {
          const rules = document.querySelector(".rules-modal");
          rules.classList.add("rules-active");
        }}
      >
        rules
      </button>
    </div>
  );
}

export default App;
