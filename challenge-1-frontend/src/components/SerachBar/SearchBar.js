import "./SearchBar.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

function SearchBar() {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchBar__input"
        placeholder="Search..."
        name="search"
      />
      <img className="searchBar__icon" src={searchIcon} alt="search icon" />
    </div>
  );
}
export default SearchBar;
