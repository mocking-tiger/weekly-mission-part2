import { useState, useEffect } from 'react';
import './Header.css';
import logoImg from '../assets/logo.svg';

const logo = logoImg;

function Header() {

  let [userInfo, setUserInfo] = useState();
  const invisible = { display: 'none', }
  const visible = { display: 'inherit', }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
      const data = await response.json();
      setUserInfo(data);
    };

    fetchData();
  }, []);

  if (!userInfo) {
    return null;
  }
  console.log(userInfo.id)
  return (
    <header>
      <div>
        <a href="/"><img src={logo} alt="로고" /></a>
        <a href="./signin/signin.html" style={userInfo.id !== 1 ? visible : invisible}>로그인</a>
        <div className="user-info" style={userInfo.id === 1 ? visible : invisible}>
          <img src={userInfo['profileImageSource']} alt="prifile" />
          <h6>{userInfo['email']}</h6>
        </div>
      </div>
    </header>
  )
}

export default Header;