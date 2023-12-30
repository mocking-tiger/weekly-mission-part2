import "./Card.css";
import logo from "../../assets/logo.svg";

const logoStyle = {
  opacity: "0.2",
  width: "133px",
  height: "24px",
};

function Card({
  image,
  createdAt,
  description,
  uploadDate,
  style = logoStyle,
}) {
  return (
    <article className="card">
      <div className="image-box">
        <img src={logo} alt="cardImage" style={style} />
      </div>
      <div className="text=box">
        <h5>{createdAt}</h5>
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>
    </article>
  );
}

export default Card;
