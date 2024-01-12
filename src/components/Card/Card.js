import "./Card.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import star from "../../assets/star.svg";
import kebab from "../../assets/kebab.svg";
import classNames from "classnames";
import ModalDeleteLink from "../Modal/ModalDeleteLink";

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
  link,
}) {
  const [isHover, setIsHover] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [showModalDeleteLink, setShowModalDeleteLink] = useState(false);

  const mouseOver = () => {
    setIsHover(true);
  };
  const mouseOut = () => {
    setIsHover(false);
  };

  function popOver(e) {
    e.preventDefault();
    setShowPopover(!showPopover);
  }

  function openModalDeleteLink(e) {
    e.preventDefault();
    setShowModalDeleteLink(true);
  }
  function closeModalDeleteLink(e) {
    e.preventDefault();
    if (e.target["alt"] === "close") {
      setShowModalDeleteLink(false);
    }
  }
  function handleDeleteLink(e) {
    e.preventDefault();
    alert("링크가 지워졌습니다.(테스트기능)");
  }
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
        <img src={kebab} alt="kebab" className="kebab" onClick={popOver} />
        {showPopover && (
          <div className="popover">
            <div onClick={openModalDeleteLink}>삭제하기</div>
            <div>폴더에 추가</div>
          </div>
        )}
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>

      {showModalDeleteLink && (
        <ModalDeleteLink
          handleClose={closeModalDeleteLink}
          handleDelete={handleDeleteLink}
          link={link}
        />
      )}
    </article>
  );
}

export default Card;
