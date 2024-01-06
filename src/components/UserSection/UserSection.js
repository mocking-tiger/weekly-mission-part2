import "./UserSection.css";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import timeDiffChecker from "../../utils/TimeDiffChecker/TimeDiffChecker";
import { todayIs } from "../../utils/TodayIs/TodayIs";
import { CODEIT_API } from "../../assets/url";
import logo from "../../assets/logo.svg";

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
      const response = await fetch(`${CODEIT_API}/users/1/links?folderId=14`);
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
