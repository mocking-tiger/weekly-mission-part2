import "./AddLink.css";
import link from "../../assets/link.svg";
import ModalAddLink from "../Modal/ModalAddLink";
import { useState } from "react";

function AddLink({ buttonInfo }) {
  const [showAddLink, setShowAddLink] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleAddLink(e) {
    e.preventDefault();
    setShowAddLink(!showAddLink);
  }

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function tempActivate(e) {
    alert("아직 미구현");
  }

  return (
    <div className="addlink-container">
      <div className="addlink-inputbox">
        <img src={link} alt="link" />
        <div>
          <input
            className="addlink-input"
            placeholder="링크를 추가해 보세요"
            id="add-link"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="addlink-button" onClick={handleAddLink}>
            추가하기
          </button>
        </div>
      </div>
      {showAddLink && (
        <ModalAddLink
          handleClose={handleAddLink}
          buttonInfo={buttonInfo}
          link={inputValue}
          handleButton={tempActivate}
        />
      )}
    </div>
  );
}

export default AddLink;
