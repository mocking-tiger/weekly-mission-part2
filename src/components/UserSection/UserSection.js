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

function CreateButton() {
  const [buttonInfo, setButtonInfo] = useState();
  const [selectedButton, setSelectedButton] = useState("전체");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${CODEIT_API}/users/1/folders`);
      const data = await response.json();
      setButtonInfo(data["data"]);
    };
    fetchData();
  }, []);

  if (!buttonInfo) {
    return null;
  }

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <nav>
      <div className="button-button-area">
        <button
          onClick={() => handleButtonClick("전체")}
          className={`${selectedButton === "전체" ? "selected" : ""}`}
        >
          전체
        </button>
        {buttonInfo.map((item) => (
          <button
            onClick={() => handleButtonClick(item.name)}
            key={item.id}
            className={item.name === selectedButton ? "selected" : ""}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="button-text-area">
        <p>{selectedButton}</p>
        <div
          className={`tool-box ${selectedButton === "전체" ? "hidden" : ""}`}
        >
          <a href="#!">
            <img src={share} alt="share" />
            공유
          </a>
          <a href="#!">
            <img src={pen} alt="pen" />
            이름 변경
          </a>
          <a href="#!">
            <img src={remove} alt="delete" />
            삭제
          </a>
        </div>
      </div>
    </nav>
  );
}

function UserSection() {
  const [cardInfo, setCardInfo] = useState();
  const style = {};
  const logoStyle = {
    opacity: "0.2",
    width: "133px",
    height: "24px",
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${CODEIT_API}/users/1/links`);
      const data = await response.json();
      setCardInfo(data["data"]);
    };
    fetchData();
  }, []);

  if (!cardInfo) {
    return null;
  }

  const timeDiffs = cardInfo.map((item) => {
    const today = new Date();
    const linkedDay = new Date(item.created_at);
    return Math.floor((today - linkedDay) / 1000);
  });

  return (
    <section>
      <CreateButton />
      <div className="div-card">
        {cardInfo.map((cardData, index) => (
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
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default UserSection;
