import "./Card.css";
import { useState } from "react";
import logo from "../../assets/logo.svg";
import star from "../../assets/star.svg";
import kebab from "../../assets/kebab.svg";
import classNames from "classnames";
import ModalDeleteLink from "../Modal/ModalDeleteLink";
import ModalAddLink from "../Modal/ModalAddLink";

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
  buttonInfo,
}) {
  const [isHover, setIsHover] = useState(false);
  const [isShowPopover, setIsShowPopover] = useState(false);
  const [isShowModalDeleteLink, setIsShowModalDeleteLink] = useState(false);
  const [isShowAddLink, setIsShowAddLink] = useState(false);

  const mouseOver = () => {
    setIsHover(true);
  };
  const mouseOut = () => {
    setIsHover(false);
  };

  function popOver(e) {
    e.preventDefault();
    setIsShowPopover(!isShowPopover);
  }

  function handleDeleteLink(e) {
    e.preventDefault();
    setIsShowModalDeleteLink(!isShowModalDeleteLink);
  }
  function handleAddLink(e) {
    e.preventDefault();
    setIsShowAddLink(!isShowAddLink);
  }
  function DeleteLink(e) {
    e.preventDefault();
    alert("아직 미구현");
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
        {isShowPopover && (
          <div className="popover">
            <div onClick={handleDeleteLink}>삭제하기</div>
            <div onClick={handleAddLink}>폴더에 추가</div>
          </div>
        )}
        <p>{description}</p>
        <h6>{uploadDate}</h6>
      </div>

      {isShowModalDeleteLink && (
        <ModalDeleteLink
          handleClose={handleDeleteLink}
          handleDelete={DeleteLink}
          link={link}
        />
      )}
      {isShowAddLink && (
        <ModalAddLink
          handleClose={handleAddLink}
          handleButton={DeleteLink}
          link={link}
          buttonInfo={buttonInfo}
        />
      )}
    </article>
  );
}

export default Card;
