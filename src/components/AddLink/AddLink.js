import "./AddLink.css";
import link from "../../assets/link.svg";
import ModalAddLink from "../Modal/ModalAddLink";
import { useState, useEffect } from "react";
import { FetchFolderData } from "../../utils/Fetch/UsersAPI";

function AddLink() {
  const [isShowAddLink, setIsShowAddLink] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [buttonInfo, setButtonInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const folderData = await FetchFolderData();
      setButtonInfo(folderData["data"]);
    };
    fetchData();
  }, []);

  if (!buttonInfo) {
    return null;
  }

  function handleAddLink(e) {
    e.preventDefault();
    setIsShowAddLink(!isShowAddLink);
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
      {isShowAddLink && (
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
