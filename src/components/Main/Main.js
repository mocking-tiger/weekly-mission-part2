import { useState, useEffect } from "react";
import { SAMPLE_FOLDER } from "../../assets/url";
import "./Main.css";

function Main() {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(SAMPLE_FOLDER);
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
      <div className="main-son">
        <img
          className="profile-image"
          src={userInfo["folder"]["owner"]["profileImageSource"]}
          alt="profile"
        />
        <h6 className="user-nickname">
          {"@" + userInfo["folder"]["owner"]["name"]}
        </h6>
        <p className="folder-name">{userInfo["folder"]["name"]}</p>
      </div>
    </main>
  );
}

export default Main;
