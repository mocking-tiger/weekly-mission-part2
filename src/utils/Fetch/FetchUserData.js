import { CODEIT_API } from "../../assets/url";

async function FetchUserData() {
  const response = await fetch(`${CODEIT_API}/users/1`);
  const data = await response.json();

  return data;
}

export default FetchUserData;
