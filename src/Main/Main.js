import { useState, useEffect } from "react";
import "./Main.css";

function Main() {
  let [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://bootcamp-api.codeit.kr/api/sample/folder"
      );
      const data = await response.json();
      setUserInfo(data);
    };

    fetchData();
  }, []);

  if (!userInfo) {
    return null;
  }

  return (
    <main>
      <div>
        <img
          src={userInfo["folder"]["owner"]["profileImageSource"]}
          alt="profile"
        />
        <h6>{"@" + userInfo["folder"]["owner"]["name"]}</h6>
        <p>{userInfo["folder"]["name"]}</p>
      </div>
    </main>
  );
}

export default Main;
