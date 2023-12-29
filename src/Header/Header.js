import './Header.css';
import logoImg from '../assets/logo.svg';

const logo = logoImg;

function Header() {
  return(
    <header>
    <div>
      <a href="/"><img src={logo} alt="로고" /></a>
      <a href="./signin/signin.html">로그인</a>
    </div>
  </header>
  )
}

export default Header;