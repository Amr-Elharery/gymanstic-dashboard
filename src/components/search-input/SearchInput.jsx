import "./SearchInput.css";
import  searchIcon from "../../assets/imgs/search-icon.png";
function SearchInput() {
  return (
    <div className="search-input flex w-full rad-16 items-center shadow">
        <div className="icon">
            <img src={searchIcon} alt="Search icon" />
        </div>
        <input type="text" placeholder="Search here..." id="search-in-dashboard"/>
    </div>
  )
}

export default SearchInput