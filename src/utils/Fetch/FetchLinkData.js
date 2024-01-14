import { CODEIT_API } from "../../assets/url";

async function FetchLinkData() {
  const response = await fetch(`${CODEIT_API}/users/1/links`);
  const data = await response.json();

  return data;
}

export default FetchLinkData;
