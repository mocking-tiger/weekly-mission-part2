import "./Section.css";
import Search from "./Search/Search";
import Card from "./Card/Card";
import { useEffect, useState } from "react";

function Section() {
  function today() {
    let today = new Date();
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
            createdAt={cardInfo[0].createdAt}
            description={cardInfo[0].description}
            uploadDate={today()}
            className="card"
          />
        </a>
        <a rel="noreferrer" href={cardInfo[1].url} target={"_blank"}>
          <Card
            style={cardInfo[1].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[1].imageSource}
            createdAt={cardInfo[1].createdAt}
            description={cardInfo[1].description}
            uploadDate={today()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[2].url} target={"_blank"}>
          <Card
            style={cardInfo[2].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[2].imageSource}
            createdAt={cardInfo[2].createdAt}
            description={cardInfo[2].description}
            uploadDate={today()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[3].url} target={"_blank"}>
          <Card
            style={cardInfo[3].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[3].imageSource}
            createdAt={cardInfo[3].createdAt}
            description={cardInfo[3].description}
            uploadDate={today()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[4].url} target={"_blank"}>
          <Card
            style={cardInfo[4].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[4].imageSource}
            createdAt={cardInfo[4].createdAt}
            description={cardInfo[4].description}
            uploadDate={today()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[5].url} target={"_blank"}>
          <Card
            style={cardInfo[5].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[5].imageSource}
            createdAt={cardInfo[5].createdAt}
            description={cardInfo[5].description}
            uploadDate={today()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[6].url} target={"_blank"}>
          <Card
            style={cardInfo[6].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[6].imageSource}
            createdAt={cardInfo[6].createdAt}
            description={cardInfo[6].description}
            uploadDate={today()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[7].url} target={"_blank"}>
          <Card
            style={cardInfo[7].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[7].imageSource}
            createdAt={cardInfo[7].createdAt}
            description={cardInfo[7].description}
            uploadDate={today()}
          />
        </a>
        <a rel="noreferrer" href={cardInfo[8].url} target={"_blank"}>
          <Card
            style={cardInfo[8].imageSource !== undefined ? style : logoStyle}
            image={cardInfo[8].imageSource}
            createdAt={cardInfo[8].createdAt}
            description={cardInfo[8].description}
            uploadDate={today()}
          />
        </a>
      </div>
    </section>
  );
}

export default Section;
