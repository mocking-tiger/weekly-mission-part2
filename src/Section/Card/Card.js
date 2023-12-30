import "./Card.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import star from "../../assets/star.svg";
import kebab from "../../assets/kebab.svg";

const defalutValue = {
  createdAt: "10minutes ago",
  description:
    "Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc consequat. Tldkd",
  uploadDate: "2023.3.15",
};

function Card({
  image = logo,
  createdAt = defalutValue.createdAt,
  description = defalutValue.description,
  uploadDate = defalutValue.uploadDate,
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
      <div className="image-box">
        <img
          src={image}
          alt="cardImage"
          style={style}
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
          className={isHover ? "growImg" : ""}
        />
        <img src={star} alt="star" />
      </div>
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
