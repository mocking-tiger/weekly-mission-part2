import "./Section.css";
import Search from "../Search/Search";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import timeDiffChecker from "../../utils/TimeDiffChecker/TimeDiffChecker";
import { todayIs } from "../../utils/TodayIs/TodayIs";
import { SAMPLE_FOLDER } from "../../assets/url";

function Section() {
  const [cardInfo, setCardInfo] = useState();
  const style = {};
  const logoStyle = {
    opacity: "0.2",
    width: "133px",
    height: "24px",
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SAMPLE_FOLDER);
      const data = await response.json();
      setCardInfo(data["folder"]["links"]);
    };
    fetchData();
  }, []);

  if (!cardInfo) {
    return null;
  }

  const timeDiffs = [];
  const dateCalculator = () => {
    const today = new Date();
    for (let i = 0; i < 9; i++) {
      const linkedDay = new Date(cardInfo[i].createdAt);
      const timeDiff = today - linkedDay;
      timeDiffs.push(Math.floor(timeDiff / 1000));
    }
  };
  dateCalculator();

  return (
    <section>
      <div className="div-searchbar">
        <Search />
      </div>
      <div className="div-card">
        {cardInfo.map((cardData, index) => (
          <a rel="noreferrer" href={cardData.url} target={"_blank"} key={index}>
            <Card
              style={cardData.imageSource !== undefined ? style : logoStyle}
              image={cardData.imageSource}
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

export default Section;
