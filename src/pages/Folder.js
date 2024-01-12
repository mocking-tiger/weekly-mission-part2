import "./Folder.css";
import Header from "../components/Header/Header";
import AddLink from "../components/AddLink/AddLink";
import Search from "../components/Search/Search";
import UserSection from "../components/UserSection/UserSection";
import Footer from "../components/Footer/Footer";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";
import ModalAddFolder from "../components/Modal/ModalAddFolder";
import { useState, useEffect } from "react";
import { CODEIT_API } from "../assets/url";
import { useNavigate } from "react-router-dom";

function Folder() {
  const [showModalAddFolder, setShowModalAddFolder] = useState(false);
  const [buttonInfo, setButtonInfo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const responseFolders = await fetch(`${CODEIT_API}/users/1/folders`);
      const folderData = await responseFolders.json();

      if (folderData["data"].length === 0) {
        navigate("/folderEmpty");
        return;
      }

      setButtonInfo(folderData["data"]);
    };
    fetchData();
  }, [navigate]);

  if (!buttonInfo) {
    return null;
  }

  function handleAddFolder() {
    setShowModalAddFolder(!showModalAddFolder);
  }

  function tempActivate() {
    alert("아직 미구현");
  }
  return (
    <>
      <Header notFixed />
      <AddLink buttonInfo={buttonInfo} />
      <Search />
      <UserSection buttonInfo={buttonInfo} />
      <FloatingActionButton onClick={handleAddFolder} />
      <Footer />
      {showModalAddFolder && (
        <ModalAddFolder
          handleClose={handleAddFolder}
          handleButton={tempActivate}
        />
      )}
    </>
  );
}

export default Folder;
