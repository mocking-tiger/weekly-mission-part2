import "./Card.css";
import logo from "../../assets/logo.svg";

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
  return (
    <article className="card">
      <div className="image-box">
        <img src={image} alt="cardImage" style={style} />
      </div>
      <div className="text-box">
        <h5>{createdAt}</h5>
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>
    </article>
  );
}

export default Card;
