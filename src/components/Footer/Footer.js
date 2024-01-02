import "./Footer.css";
import facebookImg from "../../assets/faceBook.svg";
import twitterImg from "../../assets/twtter.svg";
import youtubeImg from "../../assets/youtube.svg";
import instagramImg from "../../assets/instagram.svg";

function Footer() {
  return (
    <footer>
      <div className="footer-son">
        <div className="footer-son-son">
          <div className="foot-left">©codeit - 2023</div>
          <div className="foot-center">
            <a href="./privacy/privacy.html">Privacy Policy</a>
            <a href="./faq/faq.html">FAQ</a>
          </div>
          <div className="foot-right">
            <a rel="noreferrer" href="http://faceboom.com" target={"_blank"}>
              <img src={facebookImg} alt="facebook" />
            </a>
            <a
              rel="noreferrer"
              href="https://twitter.com/?lang=ko"
              target="_blank"
            >
              <img src={twitterImg} alt="twit" />
            </a>
            <a rel="noreferrer" href="https://www.youtube.com/" target="_blank">
              <img src={youtubeImg} alt="youTube" />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <img src={instagramImg} alt="insta" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
