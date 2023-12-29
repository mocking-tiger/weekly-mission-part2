import './Footer.css';
import facebookImg from '../assets/faceBook.svg';
import twitterImg from '../assets/twtter.svg';
import youtubeImg from '../assets/youtube.svg';
import instagramImg from '../assets/instagram.svg';

const facebook = facebookImg;
const twitter = twitterImg;
const youtube = youtubeImg;
const insta = instagramImg;

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <div class="foot-left">©codeit - 2023</div>
          <div class="foot-center">
            <a href="./privacy/privacy.html">Privacy Policy</a>
            <a href="./faq/faq.html">FAQ</a>
          </div>
          <div class="foot-right">
            <a rel="noreferrer" href="http://faceboom.com" target={"_blank"}><img src={facebook} alt="facebook" /></a>
            <a rel="noreferrer" href="https://twitter.com/?lang=ko" target="_blank"><img src={twitter} alt="twit" /></a>
            <a rel="noreferrer" href="https://www.youtube.com/" target="_blank"><img src={youtube} alt="youTube" /></a>
            <a rel="noreferrer" href="https://www.instagram.com/" target="_blank"><img src={insta} alt="insta" /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;