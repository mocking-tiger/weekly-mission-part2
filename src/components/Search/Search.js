import "./Search.css";
import magnifier from "../../assets/Search.svg";

function Search() {
  return (
    <div className="search-box">
      <label>
        <input
          type="text"
          placeholder="링크를 검색해 보세요."
          id="search-bar"
          className="search-bar"
        />
        <img src={magnifier} alt="magnifier" />
      </label>
    </div>
  );
}

export default Search;
