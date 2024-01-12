import "./UserSection.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import timeDiffChecker from "../../utils/TimeDiffChecker/TimeDiffChecker";
import { todayIs } from "../../utils/TodayIs/TodayIs";
import { CODEIT_API } from "../../assets/url";
import logo from "../../assets/logo.svg";
import pen from "../../assets/pen.svg";
import share from "../../assets/share.svg";
import remove from "../../assets/delete.svg";
import add from "../../assets/add.svg";
import ModalDeletefolder from "../Modal/ModalDeleteFolder";
import ModalEditFolderName from "../Modal/ModalEditFolderName";
import ModalSharedFolder from "../Modal/ModalSharedFolder";
import ModalAddFolder from "../Modal/ModalAddFolder";

function UserSection(buttonInfo) {
  const [cardInfo, setCardInfo] = useState([]);
  const [selectedButton, setSelectedButton] = useState("전체");
  const [filterdData, setFilteredData] = useState([]);
  const [showModalDeleteFolder, setShowModalDeleteFolder] = useState(false);
  const [showModalEditFolderName, setShowModalEditFolderName] = useState(false);
  const [showModalSharedFolder, setShowModalSharedFolder] = useState(false);
  const [showModalAddFolder, setShowModalAddFolder] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folderId, setFolderId] = useState("");

  const style = {};
  const logoStyle = {
    opacity: "0.2",
    width: "133px",
    height: "24px",
  };

  useEffect(() => {
    const fetchData = async () => {
      const responseLinks = await fetch(`${CODEIT_API}/users/1/links`);
      const linkData = await responseLinks.json();

      setCardInfo(linkData["data"]);
      setFilteredData(linkData["data"]);
    };
    fetchData();
  }, []);

  if (!buttonInfo && !cardInfo) {
    return null;
  }

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  const handleFilter = (category) => {
    if (category === "전체") {
      setFilteredData(cardInfo);
    } else {
      const filterd = cardInfo.filter((item) => item["folder_id"] === category);
      setFilteredData(filterd);
    }
  };

  const handleDeleteFolder = () => {
    setShowModalDeleteFolder(!showModalDeleteFolder);
  };

  const handleEditFolderName = () => {
    setShowModalEditFolderName(!showModalEditFolderName);
  };

  const handleSharedFolder = () => {
    setShowModalSharedFolder(!showModalSharedFolder);
  };

  const handleAddFolder = () => {
    setShowModalAddFolder(!showModalAddFolder);
  };

  const handleFolderInfo = (name, id) => {
    setFolderName(name);
    setFolderId(id);
  };

  function tempActivate(e) {
    alert("아직 미구현");
  }
  const timeDiffs = cardInfo.map((item) => {
    const today = new Date();
    const linkedDay = new Date(item.created_at);
    return Math.floor((today - linkedDay) / 1000);
  });

  return (
    <>
      <nav>
        <div className="button-button-area">
          <button
            onClick={() => {
              handleButtonClick("전체");
              handleFilter("전체");
            }}
            className={`${selectedButton === "전체" ? "selected" : ""}`}
          >
            전체
          </button>
          {buttonInfo.buttonInfo.map((item) => (
            <button
              onClick={(e) => {
                handleButtonClick(item.name);
                handleFilter(item.id);
                handleFolderInfo(e.target.innerHTML, item.id);
                console.log(e);
              }}
              key={item.id}
              className={item.name === selectedButton ? "selected" : ""}
            >
              {item.name}
            </button>
          ))}
        </div>
        <img
          src={add}
          alt="add"
          className="add-button"
          onClick={handleAddFolder}
        />
        <div className="button-text-area">
          <p>{selectedButton}</p>
          <div
            className={`tool-box ${selectedButton === "전체" ? "hidden" : ""}`}
          >
            <div onClick={handleSharedFolder}>
              <img src={share} alt="share" />
              공유
            </div>
            <div onClick={handleEditFolderName}>
              <img src={pen} alt="pen" />
              이름 변경
            </div>
            <div onClick={handleDeleteFolder}>
              <img src={remove} alt="delete" />
              삭제
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="div-card">
          {filterdData.map((cardData, index) => (
            <a
              rel="noreferrer"
              href={cardData.url}
              target={"_blank"}
              key={cardData.id}
            >
              <Card
                style={cardData.image_source !== null ? style : logoStyle}
                image={
                  cardData.image_source !== null ? cardData.image_source : logo
                }
                createdAt={timeDiffChecker(timeDiffs[index])}
                description={cardData.description}
                uploadDate={todayIs()}
                link={cardData.url}
                buttonInfo={buttonInfo}
              />
            </a>
          ))}
        </div>
      </section>
      {showModalDeleteFolder && (
        <ModalDeletefolder
          name={selectedButton}
          handleClose={handleDeleteFolder}
          handleButton={tempActivate}
        />
      )}
      {showModalEditFolderName && (
        <ModalEditFolderName
          name={selectedButton}
          handleClose={handleEditFolderName}
          handleButton={tempActivate}
        />
      )}
      {showModalSharedFolder && (
        <ModalSharedFolder
          name={selectedButton}
          handleClose={handleSharedFolder}
          buttonInfo={buttonInfo}
          cardInfo={cardInfo}
          folderName={folderName}
          folderId={folderId}
        />
      )}
      {showModalAddFolder && (
        <ModalAddFolder
          name={selectedButton}
          handleClose={handleAddFolder}
          handleButton={tempActivate}
        />
      )}
    </>
  );
}

export default UserSection;
