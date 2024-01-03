import { useState, useEffect } from "react";
import { SAPMLE_USER } from "../../assets/url";
import "./Header.css";
import logoImg from "../../assets/logo.svg";

function Header() {
  const [userInfo, setUserInfo] = useState(); //로그인정보 유무로 각각 로그인버튼/프로필정보 출력
  const invisible = { display: "none" };
  const visible = { display: "inherit" };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SAPMLE_USER);
      const data = await response.json();
      setUserInfo(data);
    };

    fetchData();
  }, []);

  if (!userInfo) {
    //api에서 데이터 미수신시 렌더링 방지
    return null;
  }

  return (
    <header>
      <div className="header-son">
        <a href="/">
          <img src={logoImg} alt="로고" />
        </a>
        <a
          className="login-button"
          href="./signin/signin.html"
          style={userInfo["id"] !== 1 ? visible : invisible}
        >
          로그인
        </a>
        <div
          className="user-info"
          style={userInfo["id"] === 1 ? visible : invisible}
        >
          <img src={userInfo["profileImageSource"]} alt="profile" />
          <h6>{userInfo["email"]}</h6>
        </div>
      </div>
    </header>
  );
}

export default Header;
