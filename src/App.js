import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shared from "./pages/Shared";
import HomePage from "./pages/HomePage";
import Folder from "./pages/Folder";
import FolderEmpty from "./pages/FolderEmpty";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="shared" element={<Shared />} />
          <Route path="folder" element={<Folder />} />
          <Route path="folderEmpty" element={<FolderEmpty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
