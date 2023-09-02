import rules from "../assets/image-rules.svg";
import closeBtnImg from "../assets/icon-close.svg";

function Rules() {
  return (
    <div className="rules-modal">
      <h2 className="rules-title">rules</h2>
      <img src={rules} alt="Rules" />
      <button
        className="close-modal-button"
        onClick={(e) => {
          e.target.parentNode.classList.remove("rules-active");
        }}
      >
        <img src={closeBtnImg} alt="Close" />
      </button>
    </div>
  );
}

export default Rules;
