import "./Folder.css";
import Header from "../components/Header/Header";
import AddLink from "../components/AddLink/AddLink";
import Search from "../components/Search/Search";
import UserSection from "../components/UserSection/UserSection";
import Footer from "../components/Footer/Footer";
import FloatingActionButton from "../components/FloatingActionButton/FloatingActionButton";
import ModalAddFolder from "../components/Modal/ModalAddFolder";
import { useState } from "react";

function Folder() {
  const [showModalAddFolder, setShowModalAddFolder] = useState(false);

  function handleAddFolder() {
    setShowModalAddFolder(!showModalAddFolder);
  }

  function tempActivate() {
    alert("아직 미구현");
  }
  return (
    <>
      <Header notFixed />
      <AddLink />
      <Search />
      <UserSection />
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
