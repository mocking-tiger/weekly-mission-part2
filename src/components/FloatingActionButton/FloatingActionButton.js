import "./FloatingActionButton.css";
import add from "../../assets/add.svg";

const FloatingActionButton = ({ onClick }) => {
  return (
    <>
      <button className="fab" onClick={onClick}>
        폴더 추가
      </button>
      <img
        src={add}
        className="floating-add-button"
        alt="add"
        onClick={onClick}
      />
    </>
  );
};

export default FloatingActionButton;
