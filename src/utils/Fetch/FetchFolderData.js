import { CODEIT_API } from "../../assets/url";

async function FetchFolderData() {
  const response = await fetch(`${CODEIT_API}/users/1/folders`);
  const data = await response.json();

  return data;
}

export default FetchFolderData;
