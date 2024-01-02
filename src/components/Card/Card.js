import "./Card.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import star from "../../assets/star.svg";
import kebab from "../../assets/kebab.svg";
import classNames from "classnames";

const DEFAULT_CARD_VALUE = {
  createdAt: "10minutes ago",
  description:
    "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd",
  uploadDate: "2023.3.15",
};

function Card({
  image = logo,
  createdAt = DEFAULT_CARD_VALUE.createdAt,
  description = DEFAULT_CARD_VALUE.description,
  uploadDate = DEFAULT_CARD_VALUE.uploadDate,
  style,
}) {
  const [isHover, setIsHover] = useState(false);
  const mouseOver = () => {
    setIsHover(true);
  };
  const mouseOut = () => {
    setIsHover(false);
  };

  return (
    <article className="card">
      <figure className="image-box">
        <img
          src={image}
          alt="card"
          style={style}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          className={classNames("card-image", { isHover })}
        />
        <img src={star} alt="star" className="star" />
      </figure>
      <div className="text-box">
        <h5>{createdAt}</h5>
        <img src={kebab} alt="kebab" />
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>
    </article>
  );
}

export default Card;
