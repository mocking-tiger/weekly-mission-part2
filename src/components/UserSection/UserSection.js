import "./UserSection.css";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import timeDiffChecker from "../../utils/TimeDiffChecker/TimeDiffChecker";
import { todayIs } from "../../utils/TodayIs/TodayIs";
import logo from "../../assets/logo.svg";
import pen from "../../assets/pen.svg";
import share from "../../assets/share.svg";
import remove from "../../assets/delete.svg";
import add from "../../assets/add.svg";
import ModalDeletefolder from "../Modal/ModalDeleteFolder";
import ModalEditFolderName from "../Modal/ModalEditFolderName";
import ModalSharedFolder from "../Modal/ModalSharedFolder";
import ModalAddFolder from "../Modal/ModalAddFolder";
import { FetchLinkData, FetchFolderData } from "../../utils/Fetch/UsersAPI";
import { useNavigate } from "react-router-dom";
import emptyFolder from "../../assets/empty-folder.png";

function UserSection() {
  const [buttonInfo, setButtonInfo] = useState([]);
  const [cardInfo, setCardInfo] = useState([]);
  const [selectedButton, setSelectedButton] = useState("전체");
  const [filterdData, setFilteredData] = useState([]);
  const [isShowModalDeleteFolder, setIsShowModalDeleteFolder] = useState(false);
  const [isShowModalEditFolderName, setIsShowModalEditFolderName] =
    useState(false);
  const [isShowModalSharedFolder, setIsShowModalSharedFolder] = useState(false);
  const [isShowModalAddFolder, setIsShowModalAddFolder] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [folderId, setFolderId] = useState("");
  const navigate = useNavigate();

  const style = {};
  const logoStyle = {
    opacity: "0.2",
    width: "133px",
    height: "24px",
  };

  useEffect(() => {
    const fetchData = async () => {
      const linkData = await FetchLinkData();
      const folderData = await FetchFolderData();
      if (folderData["data"].length === 0) {
        navigate("/folderEmpty");
        return;
      }
      setButtonInfo(folderData["data"]);
      setCardInfo(linkData["data"]);
      setFilteredData(linkData["data"]);
    };
    fetchData();
  }, [navigate]);

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
    setIsShowModalDeleteFolder(!isShowModalDeleteFolder);
  };

  const handleEditFolderName = () => {
    setIsShowModalEditFolderName(!isShowModalEditFolderName);
  };

  const handleSharedFolder = () => {
    setIsShowModalSharedFolder(!isShowModalSharedFolder);
  };

  const handleAddFolder = () => {
    setIsShowModalAddFolder(!isShowModalAddFolder);
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
          {buttonInfo.map((item) => (
            <button
              onClick={(e) => {
                handleButtonClick(item.name);
                handleFilter(item.id);
                handleFolderInfo(e.target.innerHTML, item.id);
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
          {filterdData.length === 0 && (
            <div className="empty-folder">
              <img src={emptyFolder} alt="empty" />
              <p>이 폴더는 비어있습니다.</p>
            </div>
          )}
        </div>
      </section>
      {isShowModalDeleteFolder && (
        <ModalDeletefolder
          name={selectedButton}
          handleClose={handleDeleteFolder}
          handleButton={tempActivate}
        />
      )}
      {isShowModalEditFolderName && (
        <ModalEditFolderName
          name={selectedButton}
          handleClose={handleEditFolderName}
          handleButton={tempActivate}
        />
      )}
      {isShowModalSharedFolder && (
        <ModalSharedFolder
          name={selectedButton}
          handleClose={handleSharedFolder}
          buttonInfo={buttonInfo}
          cardInfo={cardInfo}
          folderName={folderName}
          folderId={folderId}
        />
      )}
      {isShowModalAddFolder && (
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
