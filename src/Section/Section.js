import "./Section.css";
import Search from "./Search/Search";
import Card from "./Card/Card";
import { useEffect, useState } from "react";

function Section() {
  let today = new Date();
  function todayIs() {
    return today.toLocaleDateString();
  }
  let [cardInfo, setCardInfo] = useState();
  const style = {
    width: "340px",
    height: "253.746px",
  };
  const logoStyle = {
    opacity: "0.2",
    width: "133px",
    height: "24px",
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      const data = await response.json();
      setCardInfo(data["folder"]["links"]);
    };

    fetchData();
  }, []);

  if (!cardInfo) {
    return null;
  }
  const timeDiffs = [];
  const dateCalculator = async () => {
    for (let i = 0; i < 9; i++) {
      let linkedDay = new Date(cardInfo[i].createdAt);
      let timeDiff = today - linkedDay;
      timeDiffs.push(Math.floor(timeDiff / 1000));
      console.log(timeDiffs[i]);
    }
    await Promise.allSettled(timeDiffs);
  };

  dateCalculator();

  function timeDiffChecker(num) {
    const seconds = 1;
    const minute = seconds * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const mon = day * 30;
    if (num < minute * 2) {
      return `1 minute ago`;
    } else if (num < minute * 59) {
      return `${Math.trunc(num / 60)} minutes ago`;
    } else if (num > minute * 60 && num < day) {
      return `${Math.trunc(num / 60 / 60)} hours ago`;
    } else if (num > day && num < day * 2) {
      return `1 day ago`;
    } else if (num < day * 30) {
      return `${Math.trunc(num / 60 / 60 / 24)} days ago`;
    } else if (num >= day * 30 && num < day * 60) {
      return `1 month ago`;
    } else if (num < mon * 12) {
      return `${Math.trunc(num / 60 / 60 / 24 / 30)} months ago`;
    } else if (num >= mon * 12 && num < mon * 24) {
      return `1 year ago`;
    } else if (num >= mon * 24) {
      return `${Math.trunc(num / 60 / 60 / 24 / 30 / 12)} years ago`;
    }
  }
  console.log(cardInfo);
  return (
    <section>
      <div>
        <Search />
      </div>
      <div className="card-box">
        <a rel="noreferrer" href={cardInfo[0].url} target={"_blank"}>
          <Card
            style={cardInfo[0].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[0].imageSource}
            createdAt={timeDiffChecker(timeDiffs[0])}
            description={cardInfo[0].description}
            uploadDate={todayIs()}
            className="card"
          />
        </a>
        <a rel="noreferrer" href={cardInfo[1].url} target={"_blank"}>
          <Card
            style={cardInfo[1].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[1].imageSource}
            createdAt={timeDiffChecker(timeDiffs[1])}
            description={cardInfo[1].description}
            uploadDate={todayIs()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[2].url} target={"_blank"}>
          <Card
            style={cardInfo[2].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[2].imageSource}
            createdAt={timeDiffChecker(timeDiffs[2])}
            description={cardInfo[2].description}
            uploadDate={todayIs()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[3].url} target={"_blank"}>
          <Card
            style={cardInfo[3].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[3].imageSource}
            createdAt={timeDiffChecker(timeDiffs[3])}
            description={cardInfo[3].description}
            uploadDate={todayIs()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[4].url} target={"_blank"}>
          <Card
            style={cardInfo[4].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[4].imageSource}
            createdAt={timeDiffChecker(timeDiffs[4])}
            description={cardInfo[4].description}
            uploadDate={todayIs()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[5].url} target={"_blank"}>
          <Card
            style={cardInfo[5].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[5].imageSource}
            createdAt={timeDiffChecker(timeDiffs[5])}
            description={cardInfo[5].description}
            uploadDate={todayIs()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[6].url} target={"_blank"}>
          <Card
            style={cardInfo[6].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[6].imageSource}
            createdAt={timeDiffChecker(timeDiffs[6])}
            description={cardInfo[6].description}
            uploadDate={todayIs()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[7].url} target={"_blank"}>
          <Card
            style={cardInfo[7].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[7].imageSource}
            createdAt={timeDiffChecker(timeDiffs[7])}
            description={cardInfo[7].description}
            uploadDate={todayIs()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[8].url} target={"_blank"}>
          <Card
            style={cardInfo[8].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[8].imageSource}
            createdAt={timeDiffChecker(timeDiffs[8])}
            description={cardInfo[8].description}
            uploadDate={todayIs()}
          />
        </a>
      </div>
    </section>
  );
}

export default Section;
