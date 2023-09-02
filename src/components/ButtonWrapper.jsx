import bgTriangle from "../assets/bg-triangle.svg";
import Button from "./Button";
function ButtonWrapper({ handleClick, buttons }) {
  return (
    <div className="button-wrapper" onClick={handleClick}>
      <img src={bgTriangle} alt="Triangle" className="bg-triangle" />
      {buttons.map((button) => (
        <Button key={Math.random()} {...button} />
      ))}
    </div>
  );
}

export default ButtonWrapper;
