import "./Search.css";
import magnifier from "../../assets/Search.svg";

function Search() {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="링크를 검색해 보세요."
        className="search-bar"
      />
      <img src={magnifier} alt="magnifier" />
    </div>
  );
}

export default Search;
