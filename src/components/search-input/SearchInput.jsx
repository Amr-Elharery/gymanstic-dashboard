import "./SearchInput.css";
import  SearchIcon from "../../assets/imgs/search-icon.png";
function SearchInput() {
  return (
    <div className="search-input flex w-full rad-16 items-center shadow">
        <div className="icon">
            <img src={SearchIcon} alt="Search icon" />
        </div>
        <input type="text" placeholder="Search here..." id="search-in-dashboard"/>
    </div>
  )
}

export default SearchInput;