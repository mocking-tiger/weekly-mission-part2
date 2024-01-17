import { useState, useEffect } from "react";
import "./Header.css";
import logoImg from "../../assets/logo.svg";
import styled from "styled-components";
import { FetchUserData } from "../../utils/Fetch/UsersAPI";

const StyledHeader = styled.header`
  position: ${(props) => (props.$notFixed ? "static" : "fixed")};
`;

function Header({ notFixed }) {
  const [userInfo, setUserInfo] = useState();
  const invisible = { display: "none" };
  const visible = { display: "inherit" };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await FetchUserData();
      setUserInfo(userData);
    };
    fetchData();
  }, []);

  if (!userInfo) {
    return null;
  }

  return (
    <StyledHeader $notFixed={notFixed}>
      <div className="header-son">
        <a href="/">
          <img src={logoImg} alt="로고" />
        </a>
        <a
          className="login-button"
          href="./signin/signin.html"
          style={userInfo["data"][0]["id"] !== 1 ? visible : invisible}
        >
          로그인
        </a>
        <div
          className="user-info"
          style={userInfo["data"][0]["id"] === 1 ? visible : invisible}
        >
          <img src={userInfo["data"][0]["image_source"]} alt="profile" />
          <h6>{userInfo["data"][0]["email"]}</h6>
        </div>
      </div>
    </StyledHeader>
  );
}

export default Header;
